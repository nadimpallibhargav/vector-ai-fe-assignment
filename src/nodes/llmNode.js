// llmNode.js

import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {

  return (
    <div className="base-node">
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{top: `${100/3}%`}}
        className="node-handle"
      />
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{top: `${200/3}%`}}
        className="node-handle"
      />
      <div className="base-node-title">LLM</div>
      <div className="base-node-content">Prompt in, response out</div>
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        className="node-handle"
      />
    </div>
  );
}
