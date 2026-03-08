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
    <div className="base-node">
      <div className="base-node-title">Input</div>
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
          <select className="base-node-input" value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
        className="node-handle"
      />
    </div>
  );
}
