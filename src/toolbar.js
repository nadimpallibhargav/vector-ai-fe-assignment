// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    return (
        <div className="bg-white border-b border-border px-6 py-4 shadow-sm">
            <h2 className="text-sm font-semibold text-text-primary mb-4">Pipeline Nodes</h2>
            <div className="flex flex-wrap gap-3">
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
