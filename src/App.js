import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="h-screen bg-surface flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-border px-6 py-4 shadow-sm">
        <h1 className="text-2xl font-bold text-text-primary">Vector AI Pipeline Builder</h1>
        <p className="text-sm text-text-secondary mt-1">Design and configure your data processing workflows</p>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Toolbar */}
        <PipelineToolbar />

        {/* Canvas */}
        <div className="flex-1 overflow-hidden">
          <PipelineUI />
        </div>

        {/* Submit Button */}
        <SubmitButton />
      </div>
    </div>
  );
}

export default App;
