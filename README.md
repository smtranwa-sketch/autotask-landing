# AutoTask - AI Task Manager Landing Page

A premium, production-quality landing page built with React, Tailwind CSS, Framer Motion, and Lucide Icons.

## 🚀 Features

### Components

1. **Hero Section**
   - Bold headline with gradient text
   - Primary and secondary CTA buttons
   - Animated floating cards illustration
   - Social proof with user count
   - Subtle gradient background with animated blobs

2. **Features Section**
   - 6 premium feature cards with unique icons
   - Hover effects with scale and gradient backgrounds
   - Grid layout (responsive: 1 col mobile → 2 col tablet → 3 col desktop)
   - Individual gradient themes per card

3. **Testimonials Section**
   - 3 user testimonials with 5-star ratings
   - Avatar initials with gradient backgrounds
   - Quote icon decoration
   - Bottom stats bar (rating, users, uptime, support)

4. **Pricing Section**
   - 3 pricing tiers: Free, Pro, Enterprise
   - "Most Popular" badge on Pro plan
   - Detailed feature lists with checkmarks
   - Gradient CTA buttons
   - Scale effect on Pro plan card

5. **Footer**
   - Newsletter subscription form
   - Brand logo and description
   - Quick links, Resources, Legal sections
   - Social media icons
   - Contact information
   - Copyright with current year

## 🎨 Design System

- **Color Palette**: Blue/Indigo gradients as primary, complementary gradients per section
- **Typography**: Clean hierarchy with bold headings and readable body text
- **Spacing**: Consistent padding and margins using Tailwind's spacing scale
- **Shadows**: Layered shadows for depth (shadow-xl, shadow-2xl)
- **Borders**: Rounded corners (rounded-xl, rounded-2xl, rounded-3xl)
- **Animations**: Framer Motion for fade, slide, stagger, and hover effects

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **Vite 7.2.4** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📦 Installation

```bash
# Already installed dependencies
npm install

# If you need to reinstall
npm install framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
```

## 🚀 Running the Project

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The landing page will be available at: **http://localhost:5173/**

## 📁 Project Structure

```
autotask-landing/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Hero section with CTA
│   │   ├── Features.jsx      # 6 feature cards
│   │   ├── Testimonials.jsx  # User testimonials
│   │   ├── Pricing.jsx       # 3 pricing tiers
│   │   └── Footer.jsx        # Footer with links
│   ├── App.jsx               # Main app component
│   └── index.css             # Global styles + Tailwind
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
└── package.json
```

## 🎯 Key Features Implemented

✅ Fully responsive across all devices  
✅ Smooth animations with Framer Motion  
✅ Clean Tailwind utility classes (no inline styles)  
✅ Premium design with gradients and shadows  
✅ Semantic HTML structure  
✅ Accessible components  
✅ Production-ready code quality  
✅ No placeholder content - unique copy throughout  

## 🎨 Customization

### Colors
Edit gradients in `tailwind.config.js` or component files directly.

### Content
All content is in the component files - edit text, features, testimonials, and pricing directly in:
- `src/components/Hero.jsx`
- `src/components/Features.jsx`
- `src/components/Testimonials.jsx`
- `src/components/Pricing.jsx`
- `src/components/Footer.jsx`

### Animations
Framer Motion animations can be adjusted by modifying the `initial`, `animate`, `whileInView`, and `transition` props in each component.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md-lg)
- **Desktop**: > 1024px (lg+)

## 🌟 Design Highlights

- Apple-inspired minimalism
- Stripe-style elegance
- Gradient backgrounds with blur effects
- Floating card animations
- Staggered entrance animations
- Hover scale and shadow effects
- Grid pattern backgrounds
- Smooth color transitions

## 📄 License

This is a custom-built landing page for AutoTask. All rights reserved.

---

Built with ❤️ for productivity enthusiasts
