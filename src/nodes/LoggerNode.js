import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LoggerNode = ({ id }) => {

    return (
        <BaseNode
            title="Logger"
            handles={[
                { type: "target", position: Position.Left, id: `${id}-input` }
            ]}
        >
            <span>Logs incoming data</span>
        </BaseNode>
    );
};