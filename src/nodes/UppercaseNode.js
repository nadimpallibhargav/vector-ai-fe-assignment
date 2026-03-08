import { Position } from "reactflow";
import { BaseNode } from "./BaseNode";

export const UpperCaseNode = ({ id }) => {
    return (
        <BaseNode
            title="Uppercase"
            handles={[
                { type: "target", position: Position.Left, id: `${id}-input` },
                { type: "source", position: Position.Right, id: `${id}-output` }
            ]}
        >
            <span>Convert text to uppercase</span>
        </BaseNode>
    );
};