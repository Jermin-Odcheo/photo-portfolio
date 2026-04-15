# Photo Portfolio

A modern photography portfolio built with Next.js. It highlights featured shots on the home page and provides a category-based browsing experience in the gallery.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9

## Project Structure

```text
src/
  app/
	page.tsx              # Home page
	gallery/page.tsx      # Gallery page
	about/page.tsx        # About page
	contact/page.tsx      # Contact page
	components/           # Reusable UI components
	data/photos.ts        # Photo metadata
  lib/
	cloudinary.ts         # Cloudinary helpers
```

## Getting Started

### 1) Install dependencies

```powershell
npm install
```

### 2) Run development server

```powershell
npm run dev
```

Open `http://localhost:3000` in your browser.

## Available Scripts

```powershell
npm run dev
npm run build
npm run start
npm run lint
```

## Notes

- Image host allowlist is configured in `next.config.ts`.
- Update photo content in `src/app/data/photos.ts`.
