import React from 'react';
import { useDrag } from 'react-dnd';

function DraggableItem({ type, label }) {
  const [, drag] = useDrag(() => ({
    type: 'component',
    item: { type },
  }));

  return <div ref={drag} className="sidebar-item">{label}</div>;
}

export default function Sidebar() {
  return (
    <div className="sidebar">
      <DraggableItem type="TextBlock" label="Text" />
      <DraggableItem type="OneColumn" label="1-Column" />
      <DraggableItem type="TwoColumn" label="2-Column" />
      <DraggableItem type="Divider" label="Divider" />
      <DraggableItem type="ImageBlock" label="Image" />
<DraggableItem type="VideoBlock" label="Video" />
    </div>
  );
}
