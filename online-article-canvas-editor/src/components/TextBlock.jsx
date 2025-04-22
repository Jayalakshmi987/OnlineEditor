import React, { useState, useRef, useEffect } from 'react';

function TextBlock({ preview }) {
  const [html, setHtml] = useState('<p>Edit this text</p>');
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = editorRef.current;
    const save = () => setHtml(editor.innerHTML);
    if (editor && !preview) {
      editor.addEventListener('blur', save);
      return () => editor.removeEventListener('blur', save);
    }
  }, [preview]);

  const applyStyle = (cmd) => {
    document.execCommand(cmd);
  };

  if (preview) return <div dangerouslySetInnerHTML={{ __html: html }} />;
  
  return (
    <div>
      <div className="toolbar">
        <button onClick={() => applyStyle('bold')}><b>B</b></button>
        <button onClick={() => applyStyle('italic')}><i>I</i></button>
        <button onClick={() => applyStyle('underline')}><u>U</u></button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        className="text-block"
        suppressContentEditableWarning
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export default TextBlock;
