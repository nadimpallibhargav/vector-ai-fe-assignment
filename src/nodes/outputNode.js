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
    <div className="base-node">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
        className="node-handle"
      />
      <div className="base-node-title">Output</div>
      <div className="base-node-content base-node-form">
        <label className="base-node-field">
          <span>Name</span>
          <input 
            className="base-node-input"
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
        <label className="base-node-field">
          <span>Type</span>
          <select className="base-node-input" value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
}
