
# High-Energy Dark Portfolio + Résumé

A cinematic portfolio site with dark theme, neon accents, and interactive animations. Built with React, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

![Portfolio Preview](screenshot.png)

## Features

- ✨ True black background with neon cyan-to-magenta accent gradients
- 🌠 Interactive 3D starfield background using Three.js
- 🔥 Smooth scroll-snapping between sections
- ✂️ Section transitions with reveal effects
- 🌈 Animated skill bars and timeline entries
- 🃏 Flip cards for projects showcase
- 🖱️ Custom neon cursor with trailing particles
- 📱 Fully responsive design
- 🌐 Performance optimizations with reduced motion support

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or pnpm

### Installation

1. Clone this repository
```bash
git clone <repository-url>
```

2. Navigate to the project directory
```bash
cd high-energy-portfolio
```

3. Install dependencies
```bash
npm install
# or
pnpm install
```

4. Start the development server
```bash
npm run dev
# or
pnpm dev
```

5. Open your browser at http://localhost:8080

## Customizing Your Portfolio

All personal data is managed through a single source of truth file at:
```
/src/data/profile.ts
```

You can edit this file to update:
- Personal information
- Skills and expertise
- Work experience
- Projects 
- Education
- Achievements
- And more!

## Toggling Heavy Animations

The site automatically detects users' motion preferences using the `prefers-reduced-motion` media query. For users who prefer reduced motion, the site will:

- Disable the 3D starfield
- Replace it with a static gradient background
- Reduce or eliminate other intensive animations
- Keep essential content transitions

No manual configuration is needed as this happens automatically based on the user's system preferences.

## Deployment

### Building for Production

```bash
npm run build
# or
pnpm build
```

### Preview the Production Build Locally

```bash
npm run preview
# or
pnpm preview
```

### Deployment Options

You can deploy this site to:

- Netlify
- Vercel
- GitHub Pages
- Any static site hosting

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Three.js** - 3D background effects
- **React Three Fiber** - React reconciler for Three.js
