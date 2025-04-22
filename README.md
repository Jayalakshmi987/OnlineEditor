#Online Article Canvas Editor

This is a simple, visual article editor built with React. You can drag and drop blocks like text, images, and videos onto a canvas, preview your layout, and export it when you're done — all in your browser.

----------------------------------------------------------------------------------------

#What You Can Do

- Drag blocks like text, images, videos, layout sections, and dividers
- Click to edit text directly with support for bold, italic, and underline
- Upload images from your computer or use an image URL
- Embed YouTube or Vimeo videos and preview them live
- Switch between edit mode and preview mode
- Export your article as an HTML file or a downloadable ZIP
- Automatically saves your draft to your browser
- Reorder blocks by dragging them up or down

------------------------------------------------------------------------------------------

---

#How to Run Locally

> You’ll need Node.js (v16 or higher) installed.

1. Clone the repository:

```bash
git clone https://github.com/Jayalakshmi987/OnlineEditor.git
cd OnlineEditor
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

Then open `http://localhost:5173` in your browser.
![image](https://github.com/user-attachments/assets/222f49b8-fc03-40e4-8fa6-710146ce1a58)


--------------------------------------------------------------------------

#Tech Stack

- React + Vite (fast and modern)
- Zustand (for state management)
- react-dnd (for drag-and-drop)
- html2canvas + jszip + file-saver (for exporting)
- react-player (for video embedding)
- Custom CSS (no Tailwind or Bootstrap)

-------------------------------------------------------------------------

#Known Limitations

- Exported HTML is static — no editing or interaction after export
- Text toolbar is basic — no font options or colors yet
- Works best on desktop (not fully mobile-optimized)
- No undo/redo feature yet
- No server-side saving or authentication (drafts are saved locally)

--------------------------------------------------------------------------

#About This Project

This project was built as a proof-of-concept to explore how a lightweight article or newsletter editor could be created using modern frontend tools. It's a great starting point for building custom CMS tools or rich-text layout editors.

Feel free to fork it, remix it, or contribute!

---------------------------------------------------------------------------

#GitHub Repository

**[https://github.com/Jayalakshmi987/OnlineEditor](https://github.com/Jayalakshmi987/OnlineEditor)**

---

#Author

Created by [Jayalakshmi987](https://github.com/Jayalakshmi987)
