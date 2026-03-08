// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div className="toolbar">
            <div className="toolbar-header">
                <h2>Nodes</h2>
                <p>Drag blocks into the canvas</p>
            </div>
            <div className="toolbar-grid">
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='logger' label='Logger' />
                <DraggableNode type='uppercase' label='Uppercase' />
                <DraggableNode type='number' label='Number' />
                <DraggableNode type='boolean' label='Boolean' />
                <DraggableNode type='delay' label='Delay' />
            </div>
        </div>
    );
};
