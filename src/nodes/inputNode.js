// inputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <div className="w-56 bg-white rounded-lg border border-border shadow-node hover:shadow-lg transition-shadow p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-success"></div>
        <span className="font-semibold text-text-primary text-sm">Input</span>
      </div>
      <div className="space-y-3">
        <div className="space-y-1">
          <label className="block text-xs font-medium text-text-secondary">Name</label>
          <input 
            type="text" 
            value={currName} 
            onChange={handleNameChange}
            className="w-full px-2 py-1 text-xs border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
          />
        </div>
        <div className="space-y-1">
          <label className="block text-xs font-medium text-text-secondary">Type</label>
          <select 
            value={inputType} 
            onChange={handleTypeChange}
            className="w-full px-2 py-1 text-xs border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
      />
    </div>
  );
}
