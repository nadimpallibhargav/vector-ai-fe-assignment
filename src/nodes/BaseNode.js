import { Handle } from "reactflow";

export const BaseNode = ({ title, children, handles }) => {
    return (
        <div style={{ width: 200, minHeight: 80, border: "1px solid black"}}>
            <div><strong>{title}</strong></div>

            <div>{children}</div>

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