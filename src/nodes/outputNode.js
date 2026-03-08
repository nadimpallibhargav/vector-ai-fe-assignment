// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div className="w-56 bg-white rounded-lg border border-border shadow-node hover:shadow-lg transition-shadow p-4">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-warning"></div>
        <span className="font-semibold text-text-primary text-sm">Output</span>
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
            value={outputType} 
            onChange={handleTypeChange}
            className="w-full px-2 py-1 text-xs border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </div>
      </div>
    </div>
  );
}
