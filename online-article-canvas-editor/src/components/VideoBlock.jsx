import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function VideoBlock({ preview }) {
  const [videoUrl, setVideoUrl] = useState('');
  const [inputUrl, setInputUrl] = useState('');

  const handleUrlChange = (e) => setInputUrl(e.target.value);

  const handleLoad = () => {
    if (ReactPlayer.canPlay(inputUrl)) {
      setVideoUrl(inputUrl);
    } else {
      alert('Invalid video URL');
    }
  };

  const getThumbnail = (url) => {
    const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return match ? `https://img.youtube.com/vi/${match[1]}/0.jpg` : null;
  };

  if (preview && videoUrl) {
    return <ReactPlayer url={videoUrl} width="100%" controls />;
  }

  return (
    <div style={{ border: '2px dashed #bbb', padding: '10px', borderRadius: '6px', backgroundColor: '#f9f9f9' }}>
      <strong>Embed Video (YouTube/Vimeo)</strong>
      <input
        type="text"
        placeholder="Enter video URL"
        value={inputUrl}
        onChange={handleUrlChange}
        style={{ width: '100%', marginTop: '8px', padding: '6px' }}
      />
      <button onClick={handleLoad} style={{ marginTop: '8px' }}>Load Video</button>

      {videoUrl && (
        <>
          <div style={{ marginTop: '10px' }}>
            <ReactPlayer url={videoUrl} width="100%" controls />
          </div>
          {getThumbnail(videoUrl) && (
            <p style={{ fontSize: '12px', color: '#777' }}>
              Thumbnail: <img src={getThumbnail(videoUrl)} alt="thumbnail" width="120" />
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default VideoBlock;
