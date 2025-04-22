import React, { useState } from 'react';

function ImageBlock({ preview }) {
  const [imgSrc, setImgSrc] = useState(null);
  const [imgUrlInput, setImgUrlInput] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setImgSrc(reader.result);
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file?.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => setImgSrc(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = () => {
    if (imgUrlInput.trim() !== '') {
      setImgSrc(imgUrlInput.trim());
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  if (preview && imgSrc) {
    return <img src={imgSrc} alt="Image" style={{ maxWidth: '100%' }} />;
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        border: '2px dashed #bbb',
        padding: '12px',
        borderRadius: '6px',
        backgroundColor: '#f8f8f8',
      }}
    >
      <p><strong>Upload Image</strong></p>
      <input type="file" accept="image/*" onChange={handleFileChange} />

      <p style={{ marginTop: '10px' }}><strong>OR Paste Image URL</strong></p>
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          placeholder="https://example.com/image.jpg"
          value={imgUrlInput}
          onChange={(e) => setImgUrlInput(e.target.value)}
          style={{ flex: 1, padding: '6px' }}
        />
        <button onClick={handleUrlSubmit}>Insert</button>
      </div>

      {imgSrc && (
        <div style={{ marginTop: '16px' }}>
          <img src={imgSrc} alt="Preview" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default ImageBlock;
