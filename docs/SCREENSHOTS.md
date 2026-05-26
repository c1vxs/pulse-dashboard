# How to capture screenshots for the README

The README references five images that should live in this `docs/` folder. Until they exist, GitHub shows broken-image icons.

## What you need

| Filename         | What to capture                                   |
|------------------|---------------------------------------------------|
| `hero.png`       | Full Overview page — this is the top-of-README banner. Capture wide (1600x900+). |
| `dashboard.png`  | Same Overview page, can be the same image as hero or a tighter crop. |
| `analytics.png`  | Analytics page (the one with channel chart and funnel). |
| `customers.png`  | Customers page showing the data table. |
| `funnel.png`     | Close-up zoom on just the Conversion Funnel card. |

## Capturing on Windows

1. Run the app: `npm run dev` from the project folder.
2. Open Chrome to `http://localhost:3000`.
3. Resize the window wider — at least 1400px so the sidebar + content both show clearly. (`F11` for fullscreen helps.)
4. For each page:
   - Press `Ctrl+Shift+P` in Chrome DevTools (`F12` first), type **"Capture full size screenshot"**, hit Enter. Chrome saves a PNG of the whole page to your Downloads folder.
   - Alternative for normal viewport-sized shots: use Windows **Snipping Tool** (`Win+Shift+S`).
5. Rename and move the five files into this `docs/` folder.

## Tips for a polished look

- Use a 16:9 aspect ratio for the hero image if possible — it looks best on GitHub's render.
- PNG over JPEG (sharper for UI screenshots).
- Compress with [tinypng.com](https://tinypng.com) before committing — keeps the repo small.
- If the dashboard looks cramped, hide the browser bookmarks bar (`Ctrl+Shift+B`).

## After you have the images

```bash
git add docs/
git commit -m "Add README screenshots"
git push
```

Then refresh your GitHub repo page. The images should render immediately.
