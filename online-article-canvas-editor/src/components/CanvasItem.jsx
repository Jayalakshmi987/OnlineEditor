import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

function CanvasItem({ id, index, moveItem, children }) {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: 'canvas-item',
    hover(item) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex !== hoverIndex) {
        moveItem(dragIndex, hoverIndex);
        item.index = hoverIndex;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: 'canvas-item',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div ref={ref} className="canvas-block" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
}

export default CanvasItem;
