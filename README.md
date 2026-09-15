# For Chenda — Anniversary Website

A little React site made for Heang Chenda's anniversary (July 21st).
Styled entirely with **Tailwind CSS v3** utility classes.

## Structure

```
src/
  components/
    HeartIcon.jsx     small reusable heart svg
    PetalField.jsx     ambient floating hearts background
    Nav.jsx             top navigation
    Home.jsx            hero + clickable envelope
    About.jsx           "About Us" page
    Story.jsx           "Our Story" timeline
    PhotoSlider.jsx      clickable photo slider (click image to advance)
    LetterPage.jsx       the letter + photo slider
  data/
    photos.js            <-- replace these image URLs with real photos
  App.jsx                page routing (simple state-based)
  index.css              Tailwind directives + tiny base layer
  main.jsx                entry point
tailwind.config.js        custom "brand" color palette, fonts, keyframes
postcss.config.js         required for Tailwind to process index.css
```

The pink/white palette lives in `tailwind.config.js` under `theme.extend.colors.brand`
(e.g. `brand.rose`, `brand.deep`, `brand.blush`) — change the hex values there to
retint the whole site at once, or use classes like `bg-brand-rose` / `text-brand-deep`
directly in components.

## Run it locally

You'll need [Node.js](https://nodejs.org) installed.

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for hosting

```bash
npm run build
```

This creates a `dist/` folder you can upload anywhere (Netlify, Vercel, GitHub Pages, etc.) or just open `dist/index.html` directly in a browser.

## Personalizing

- **Photos:** edit `src/data/photos.js` and swap in real image URLs, or put image files in a `public/` folder and reference them like `/your-photo.jpg`.
- **The letter & story text:** edit `src/components/LetterPage.jsx` and `src/components/Story.jsx`.
- **Names/date:** edit `src/components/Home.jsx` and `src/components/Nav.jsx`.
