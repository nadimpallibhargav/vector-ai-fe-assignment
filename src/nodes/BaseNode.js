import { Handle } from "reactflow";

export const BaseNode = ({ title, children, handles }) => {
    return (
        <div className="w-64 min-h-24 bg-white rounded-lg border border-border shadow-node hover:shadow-lg transition-shadow p-4">
            <div className="font-semibold text-text-primary text-sm mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                {title}
            </div>

            <div className="text-text-secondary text-xs space-y-2">{children}</div>

            {handles?.map((h, index) => (
                <Handle
                    key={index}
                    type={h.type}
                    position={h.position}
                    id={h.id}
                />
            ))}
        </div>
    );
};
