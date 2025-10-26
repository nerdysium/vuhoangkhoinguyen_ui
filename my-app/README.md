# Portfolio Website - Card UI Design

A modern, centered card-based portfolio interface built with Next.js, TypeScript, and Tailwind CSS. Inspired by mobile app design patterns.

## Features

- 🎨 Centered card-based dark UI design
- 🌓 Dark mode by default with light mode toggle
- 📱 Mobile-first responsive design
- ⚡ Fast and optimized with Next.js 16
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- ✨ Smooth hover animations and transitions
- 📋 Copy email to clipboard functionality
- 🎯 Icon-based navigation
- 👤 Avatar display in hero section

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
my-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Main page with centered card container
│   │   └── globals.css      # Global styles and dark theme
│   └── components/
│       ├── Header.tsx       # Icon-based navigation with theme toggle
│       ├── Hero.tsx         # Hero card with avatar and CTA buttons
│       ├── Projects.tsx     # Projects list with circular icons
│       └── Products.tsx     # Products list in card format
├── public/                  # Static assets
└── package.json
```

## Customization

### Update Personal Information

Edit the content in the following components:
- `src/components/Hero.tsx` - Update name, title, and description
- `src/components/Projects.tsx` - Add your projects
- `src/components/Products.tsx` - Add your products/templates
- `src/components/Contact.tsx` - Update contact email
- `src/components/Footer.tsx` - Update social media links

### Change Email

Replace `'hello@example.com'` in:
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`

### Styling

- **Background colors**: 
  - Main background: `#141414` (darkest)
  - Card background: `#1f1f1f` (dark)
  - Interactive elements: `#2a2a2a` (medium dark)
- **Card design**: All sections use rounded-3xl cards with consistent padding
- **Icon colors**: Customize project icon colors in `Projects.tsx`
- **Typography**: Uses Geist font family for modern look

## Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Geist Font** - Typography

## License

Free to use for personal and commercial projects.
