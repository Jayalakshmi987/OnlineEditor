import React from 'react';
import { useDrop } from 'react-dnd';
import useStore from '../store';
import CanvasItem from './CanvasItem';

function EditorCanvas({ preview, canvasRef }) {
  const { components, addComponent, moveComponent } = useStore();

  const [, drop] = useDrop(() => ({
    accept: 'component',
    drop: (item) => addComponent(item),
  }));

  return (
    <div
      ref={(node) => {
        drop(node);
        if (canvasRef) canvasRef.current = node;
      }}
      className="canvas"
    >
      
{components.map((comp, i) => {
  console.log(`Rendering index ${i}:`, comp); // Debug line
  const Comp = comp.type;

  if (!Comp) {
    return <div key={i} style={{ color: 'red' }}>❌ Invalid component at index {i}</div>;
  }

  return (
    <CanvasItem key={i} id={i} index={i} moveItem={moveComponent}>
      <Comp {...comp.props} preview={preview} />
    </CanvasItem>
  );
})}

    </div>
  );
}

export default EditorCanvas;


