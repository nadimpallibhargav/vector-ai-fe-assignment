import { Handle } from "reactflow";

export const BaseNode = ({ title, children, handles }) => {
    return (
        <div className="base-node">
            <div className="base-node-title">{title}</div>

            <div className="base-node-content">{children}</div>

            {handles?.map((h, index) => (
                <Handle
                    key={index}
                    type={h.type}
                    position={h.position}
                    id={h.id}
                    className="node-handle"
                />
            ))}
        </div>
    );
};
