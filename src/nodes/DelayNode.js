import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DelayNode = ({ id }) => {

    return (
        <BaseNode
            title="Delay"
            handles={[
                { type: "target", position: Position.Left, id: `${id}-input` },
                { type: "source", position: Position.Right, id: `${id}-output` }
            ]}
        >
            <span>Wait before passing data</span>
        </BaseNode>
    );
};