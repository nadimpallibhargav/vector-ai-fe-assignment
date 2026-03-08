// submit.js
import { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append('pipeline', JSON.stringify({ nodes, edges }));

        setLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            alert(
                `Pipeline Analysis\n\n` +
                `Nodes: ${data.num_nodes}\n` +
                `Edges: ${data.num_edges}\n` +
                `Is DAG: ${data.is_dag ? 'Yes' : 'No'}`
            );
        } catch (error) {
            alert('Error connecting to backend.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center px-6 py-4 bg-white border-t border-border">
            <button 
                onClick={handleSubmit}
                disabled={loading}
                className="px-6 py-2 bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white font-medium rounded-lg transition-colors shadow-base hover:shadow-md disabled:shadow-sm"
            >
                {loading ? 'Analyzing...' : 'Submit Pipeline'}
            </button>
        </div>
    );
};
