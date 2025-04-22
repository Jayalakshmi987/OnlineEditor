import html2canvas from 'html2canvas';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export async function exportToHTML(canvasRef) {
  const html = canvasRef.current.innerHTML;
  const blob = new Blob([`<html><body>${html}</body></html>`], { type: 'text/html' });
  saveAs(blob, 'article.html');
}

export async function exportToZIP(canvasRef) {
  const zip = new JSZip();
  const html = `<html><body>${canvasRef.current.innerHTML}</body></html>`;
  zip.file('index.html', html);

  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'article.zip');
}
