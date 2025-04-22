import React from 'react';
import { exportToHTML, exportToZIP } from '../utils/exportUtils';
import useStore from '../store';

export default function ExportPanel({ canvasRef, togglePreview, isPreview }) {
  const clearComponents = useStore((state) => state.clearComponents);

  return (
    <div
      className="export-panel"
      style={{
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: '16px',
      }}
    >
      <button onClick={togglePreview}>
        {isPreview ? 'Switch to Edit Mode' : 'Switch to Preview'}
      </button>
      <button onClick={() => exportToHTML(canvasRef)}>Export as HTML</button>
      <button onClick={() => exportToZIP(canvasRef)}>Export as ZIP</button>
      <button onClick={clearComponents}>Clear Draft</button>
    </div>
  );
}

