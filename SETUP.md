# 🚀 Quick Setup Guide

Follow these steps to get your LOBAISEO landing page running in minutes.

## Step 1: Install Dependencies

Open your terminal in this folder and run:

```bash
npm install
```

This will install all required packages:
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons
- And more...

## Step 2: Add Hero Video (Important!)

1. Create the `public/assets/` folder if it doesn't exist
2. Place your hero background video as: `public/assets/hero.mp4`

**Video Requirements:**
- Format: MP4
- Resolution: 1920x1080 (recommended)
- Theme: Blue/dark themed with motion
- Size: < 5MB for best performance
- Should loop smoothly

**Don't have a video?** You can:
- Use a free stock video from Pexels or Pixabay
- Search for: "blue abstract background" or "technology background"
- Or temporarily comment out the video in `HeroSection.tsx`

## Step 3: Start Development Server

```bash
npm run dev
```

Your landing page will open automatically at: **http://localhost:3000**

## Step 4: Customize (Optional)

### Change Colors

Edit `tailwind.config.js` to modify the color scheme.

### Update Copy

All text content is in the section component files under `src/components/sections/`

### Modify Pricing

Edit `PricingSection.tsx` to change prices and plans.

## Adding Images

Throughout the code, you'll find comments like:

```tsx
{/* Image placeholder: Dashboard preview */}
```

Replace these placeholder `<div>` elements with actual `<img>` tags:

```tsx
<img src="/assets/dashboard.png" alt="Dashboard preview" />
```

## Building for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## Preview Production Build

```bash
npm run preview
```

## Troubleshooting

### Port 3000 already in use?

Change the port in `vite.config.ts`:

```ts
server: {
  port: 3001, // or any other port
}
```

### Video not showing?

- Check the file path: `public/assets/hero.mp4`
- Verify the video format is MP4
- Check browser console for errors

### Styling issues?

Run this to rebuild Tailwind:

```bash
npm run dev
```

## Need Help?

- Check the main README.md for detailed documentation
- All components are well-commented
- Each section is self-contained and easy to modify

---

**You're all set!** 🎉

Start customizing your landing page and make it your own!
