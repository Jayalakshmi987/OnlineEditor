import React from 'react';

function TwoColumn({ preview }) {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <div style={{ flex: 1, border: '1px dashed gray', padding: '10px' }}>Left Column</div>
      <div style={{ flex: 1, border: '1px dashed gray', padding: '10px' }}>Right Column</div>
    </div>
  );
}

export default TwoColumn;
