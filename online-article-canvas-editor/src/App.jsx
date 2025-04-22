import React, { useRef, useState } from 'react';
import Sidebar from './components/Sidebar';
import EditorCanvas from './components/EditorCanvas';
import ExportPanel from './components/ExportPanel';
import './styles/app.css';

function App() {
  const [preview, setPreview] = useState(false);
  const canvasRef = useRef(null);

  return (
    <div className="app-container">
      <ExportPanel
        canvasRef={canvasRef}
        togglePreview={() => setPreview((p) => !p)}
        isPreview={preview}
      />
      <div className="editor-layout">
        {!preview && <Sidebar />}
        <EditorCanvas preview={preview} canvasRef={canvasRef} />
      </div>
    </div>
  );
}

export default App;
