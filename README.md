# NOHM Landing Page

A modern, responsive landing page for NOHM - Private, Neutral Home Services.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll animations with Motion
- ✅ Mobile-friendly navigation with hamburger menu
- ✅ SEO optimized with meta tags
- ✅ Optimized for Vercel deployment
- ✅ TypeScript for type safety
- ✅ Clean, maintainable component structure

## Project Structure

```
nohm-landing/
├── public/
│   └── favicon.png
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── figma/
│   │   │   │   └── ImageWithFallback.tsx
│   │   │   ├── ui/
│   │   │   │   └── utils.ts
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── HomeIDSection.tsx
│   │   │   ├── ComparisonSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   └── Footer.tsx
│   │   └── App.tsx
│   ├── assets/
│   │   └── *.png (logo files)
│   ├── styles/
│   │   ├── fonts.css
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   └── theme.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd nohm-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## Deployment to Vercel

### Option 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and configure accordingly
5. Click "Deploy"

### Option 3: Manual Upload

1. Run `npm run build`
2. Upload the `dist` folder to Vercel

## Configuration

The project includes a `vercel.json` for optimal deployment:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Customization

### Colors

The main brand color is defined in `src/styles/theme.css`:
- Primary Blue: `#1DA1F2`
- Dark Background: `#050814`
- Secondary Dark: `#0a0e27`

### Fonts

The project uses Inter font from Google Fonts, loaded in `src/styles/fonts.css`.

### Images

- Logo files are in `src/assets/`
- Background images use Unsplash URLs (consider self-hosting for production)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 NOHM. All rights reserved.
