# LOBAISEO Landing Page

A premium, production-ready landing page for LOBAISEO (GMB Boost Pro) - an AI-powered Google Business Profile automation platform.

## 🎨 Features

- **Modern Design**: Gen-Z aesthetic with premium SaaS feel
- **Rich Animations**: Framer Motion powered scroll animations, micro-interactions, and motion effects
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Performance Optimized**: Built with React 18 + Vite for lightning-fast load times
- **Type-Safe**: Full TypeScript implementation
- **Component-Based**: Clean, maintainable React component architecture

## 📋 Sections Included

1. **Hero Section** - Full-width video background with animated CTAs
2. **Social Proof Strip** - Animated marquee of brand logos
3. **Problem Section** - Pain-focused content highlighting GMB management challenges
4. **Solution Section** - How LOBAISEO solves the problems
5. **Core Features** (5 sections):
   - Automated Post Scheduling
   - AI Review Replies (3 variations)
   - Magic QR Code System
   - Review Campaign Automation
   - SEO Audit Tool
6. **How It Works** - Step-by-step timeline
7. **Analytics Dashboard** - Data visualization preview
8. **Pricing Section** - Per-profile INR pricing with billing toggle
9. **Use Cases** - Industry-specific applications
10. **Tech Stack & Security** - Technology and security features
11. **Agency Section** - Multi-account management features
12. **Final CTA** - High-converting call-to-action
13. **Footer** - Comprehensive footer with links and contact info

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add Hero Video**
   - Place your blue-themed hero video at: `public/assets/hero.mp4`
   - Recommended: 1920x1080, MP4 format, < 5MB for best performance

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   - Navigate to: http://localhost:3000

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
lob-landing-page/
├── public/
│   └── assets/
│       └── hero.mp4          # Hero background video
├── src/
│   ├── components/
│   │   ├── sections/         # All landing page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProblemSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── AutomatedPostsSection.tsx
│   │   │   ├── AIReviewSection.tsx
│   │   │   ├── MagicQRSection.tsx
│   │   │   ├── ReviewCampaignSection.tsx
│   │   │   ├── SEOAuditSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── AnalyticsDashboardSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── UseCasesSection.tsx
│   │   │   ├── TechStackSection.tsx
│   │   │   ├── AgencySection.tsx
│   │   │   ├── FinalCTASection.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── SocialProofStrip.tsx
│   │   └── ui/
│   │       └── Button.tsx    # Shared button component
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles + Tailwind
├── index.html
├── package.json
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── README.md
```

## 🎨 Design System

### Colors

- **Primary**: Blue gradients (#0ea5e9 to #0369a1)
- **Secondary**: Violet/Purple (#a855f7 to #7e22ce)
- **Electric**: Neon blue (#00d4ff) and violet (#bf00ff)
- **Background**: White, gray-50, and dark gradients

### Typography

- **Display Font**: Space Grotesk (headings)
- **Body Font**: Inter (paragraphs)
- **Alternative**: Plus Jakarta Sans

### Animations

All animations are built with Framer Motion:
- Scroll-triggered reveals
- Staggered card animations
- Hover micro-interactions
- Parallax effects
- Animated counters

## 🖼️ Image & Video Placeholders

All sections have clearly marked placeholders for images and videos:

```tsx
// Example placeholder comment
{/* Image placeholder: Dashboard preview showing analytics */}
```

### Required Media

1. **Hero Video** (`/assets/hero.mp4`)
   - Blue-themed motion background
   - 1920x1080 recommended
   - Auto-loop, muted

2. **Brand Logos** (Social Proof section)
   - Client/partner logos
   - PNG/SVG format

3. **Dashboard Screenshots** (various sections)
   - Main dashboard view
   - Analytics charts
   - Campaign interface
   - SEO audit reports

4. **Magic QR Code** visuals
5. **Technology logos** (React, Supabase, etc.)

## 🛠️ Customization

### Modify Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: { /* your colors */ },
  violet: { /* your colors */ },
}
```

### Update Content

All copy is in the respective section components. Each section has:
- Headings
- Descriptions
- Feature lists
- Stats/metrics

Simply edit the text in the component files.

### Change Pricing

Edit `PricingSection.tsx`:

```tsx
pricePerProfile: 399, // Change amount
billingText: '₹399/profile for 6 months', // Update text
```

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

All sections adapt gracefully to different screen sizes.

## ⚡ Performance

- Vite for fast builds
- Code splitting
- Optimized animations
- Lazy loading ready
- < 1s initial load time

## 🤝 Support

For questions or issues:
- Email: hello@lobaiseo.com
- Phone: +91 123 456 7890

## 📄 License

© 2024 LOBAISEO. All rights reserved.

---

**Built with ❤️ in India** 🇮🇳
