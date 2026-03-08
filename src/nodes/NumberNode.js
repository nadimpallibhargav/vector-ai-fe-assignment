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
            <div className="space-y-1">
                <label className="block text-xs font-medium text-text-secondary">Value</label>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="w-full px-2 py-1 text-xs border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                />
            </div>
        </BaseNode>
    );
};
