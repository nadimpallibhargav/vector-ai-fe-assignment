import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const NumberNode = ({ id, data }) => {

    const [number, setNumber] = useState(data?.number || 0);

    return (
        <BaseNode
            title="Number"
            handles={[
                { type: "source", position: Position.Right, id: `${id}-number` }
            ]}
        >

            <label>
                Value:
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
            </label>

        </BaseNode>
    );
};