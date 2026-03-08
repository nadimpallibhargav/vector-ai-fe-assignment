// textNode.js
import { useState, useEffect, useRef, useCallback } from 'react';
import { Handle, Position } from 'reactflow';

const MIN_WIDTH = 200;
const MIN_HEIGHT = 80;
const MAX_WIDTH = 500;
const MAX_HEIGHT = 300;
const CHAR_WIDTH = 8;
const PADDING = 24;

const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

function extractVariables(text) {
  return [...new Set([...text.matchAll(VARIABLE_REGEX)].map(m => m[1]))];
}

function calcWidth(text) {
  const longestLine = Math.max(...text.split('\n').map(l => l.length));
  return Math.max(MIN_WIDTH, Math.min(longestLine * CHAR_WIDTH + PADDING * 2, MAX_WIDTH));
}

function resizeTextarea(textarea) {
  textarea.style.height = 'auto';
  const capped = textarea.scrollHeight > MAX_HEIGHT;
  textarea.style.height = `${Math.min(textarea.scrollHeight, MAX_HEIGHT)}px`;
  textarea.style.overflowY = capped ? 'auto' : 'hidden';
}

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [width, setWidth] = useState(MIN_WIDTH);
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);
  const nodeRef = useRef(null);

  const recalculate = useCallback((text) => {
    setVariables(extractVariables(text));
    if (textareaRef.current) resizeTextarea(textareaRef.current);
    setWidth(calcWidth(text));
  }, []);

  useEffect(() => { recalculate(currText); }, []);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    recalculate(e.target.value);
  };

  const getHandleTop = (index, total) => {
    const nodeHeight = nodeRef.current?.offsetHeight || MIN_HEIGHT;
    if (total === 1) return nodeHeight / 2;
    return 36 + ((nodeHeight - 52) / (total - 1)) * index;
  };

  return (
    <div 
      ref={nodeRef} 
      className="bg-white rounded-lg border border-border shadow-node hover:shadow-lg transition-shadow p-4 relative"
      style={{ width, minHeight: MIN_HEIGHT }}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-primary"></div>
        <span className="font-semibold text-text-primary text-sm">Text</span>
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-medium text-text-secondary">Content</label>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          rows={1}
          className="w-full px-2 py-1 text-xs border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 resize-none overflow-hidden"
          spellCheck={false}
        />
      </div>

      {variables.map((varName, index) => (
        <div key={varName}>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-var-${varName}`}
            style={{ top: getHandleTop(index, variables.length) }}
          />
          <div className="absolute text-xs font-mono text-text-secondary" style={{ left: 10, top: getHandleTop(index, variables.length) - 9 }}>
            {`{{${varName}}}`}
          </div>
        </div>
      ))}

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />
    </div>
  );
};
