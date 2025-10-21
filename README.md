# TPTP Project

Simple static website for the Faculty of Electrical Engineering (HTML, CSS, JS).

Project layout (example)
- html/ (HTML pages)
- css/ (styles)
- js/ (scripts)
- images/ (images)

Run locally
- Open HTML files directly in your browser.
- Or run a simple server from project root:
  - Python: `python -m http.server 8000`
  - Node: `npx http-server . -p 8000`
  - Then open: `http://localhost:8000/html/start.html`

Notes about paths
- If an HTML file is inside `html/`, use:
  - CSS: `../css/tptpstil.css`
  - JS: `../js/tptobrazac.js`
  - Images: `../images/logo.png`
- If you move images or JS to other folders, update these relative paths.

If you want, tell me the new image/js folders and I will update all HTML files.

