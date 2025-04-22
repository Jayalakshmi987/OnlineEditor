import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

function MediaBlock({ preview }) {
  const [mediaType, setMediaType] = useState(null); // 'image' or 'video'
  const [fileUrl, setFileUrl] = useState('');
  const fileInputRef = useRef();

  // Extract video metadata (simplified placeholder)
  const getVideoThumbnail = (url) => {
    if (url.includes('youtube')) {
      const match = url.match(/v=([^&]+)/);
      return match ? `https://img.youtube.com/vi/${match[1]}/0.jpg` : '';
    }
    return '';
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMediaType('image');
        setFileUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlChange = (e) => {
    const url = e.target.value;
    if (ReactPlayer.canPlay(url)) {
      setMediaType('video');
      setFileUrl(url);
    } else {
      setFileUrl('');
      setMediaType(null);
    }
  };

  // Drag & drop image support
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMediaType('image');
        setFileUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  // Preview mode rendering
  if (preview) {
    if (mediaType === 'image') {
      return <img src={fileUrl} alt="uploaded" style={{ maxWidth: '100%' }} />;
    } else if (mediaType === 'video') {
      return <ReactPlayer url={fileUrl} controls width="100%" />;
    } else {
      return <p style={{ fontStyle: 'italic' }}>No media selected</p>;
    }
  }

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        border: '2px dashed #aaa',
        padding: '10px',
        borderRadius: '6px',
        backgroundColor: '#f8f8f8',
      }}
    >
      <div style={{ marginBottom: '8px' }}>
        <strong>Upload Image:</strong>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ marginLeft: '10px' }}
        />
      </div>

      <div style={{ marginBottom: '8px' }}>
        <strong>Embed Video URL:</strong>
        <input
          type="text"
          placeholder="https://youtube.com/..."
          onChange={handleUrlChange}
          style={{ width: '100%', padding: '6px' }}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        {mediaType === 'image' && (
          <img src={fileUrl} alt="preview" style={{ maxWidth: '100%' }} />
        )}
        {mediaType === 'video' && (
          <>
            <ReactPlayer url={fileUrl} width="100%" controls />
            <p style={{ fontSize: '12px', color: '#666' }}>
              Thumbnail:{' '}
              <img
                src={getVideoThumbnail(fileUrl)}
                alt="thumbnail"
                style={{ width: '120px', marginTop: '4px' }}
              />
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default MediaBlock;
