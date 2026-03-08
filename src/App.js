import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="app-shell" style={{display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem', minHeight: '100vh'}}>
      <header className="app-header" style={{padding: '1rem 1.25rem'}}>
        <p className="app-eyebrow">VectorShift AI</p>
        <h1>Automate workflows</h1>
      </header>

      <main className="app-content">
        <aside className="app-panel app-panel-toolbar">
          <PipelineToolbar />
        </aside>
        <section className="app-panel app-panel-canvas">
          <PipelineUI />
        </section>
      </main>

      <footer className="app-footer">
        <SubmitButton />
      </footer>
    </div>
  );
}

export default App;
