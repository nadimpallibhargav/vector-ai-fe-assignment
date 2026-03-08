import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const BooleanNode = ({ id, data }) => {

    const [value, setValue] = useState(data?.value || false);

    return (
        <BaseNode
            title="Boolean"
            handles={[
                { type: "source", position: Position.Right, id: `${id}-value` }
            ]}
        >
            <label className="flex items-center gap-2 cursor-pointer">
                <input
                    type="checkbox"
                    checked={value}
                    onChange={(e) => setValue(e.target.checked)}
                    className="w-4 h-4 rounded border-border"
                />
                <span className="text-xs text-text-secondary">Enabled</span>
            </label>
        </BaseNode>
    );
};
