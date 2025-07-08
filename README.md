# 🍦 Interactive Ice Cream Builder

A modern, interactive React application that allows users to customize their own ice cream rolls by selecting flavors, sauces, and nuts with real-time pricing and smooth animations.

## 🎯 Project Overview

This project was built as an interview exercise to demonstrate advanced React development skills, including state management, component architecture, animations, and scalable design patterns.

### ✨ Key Features

- **Interactive Customization**: Add/remove ice cream flavors, sauces, and nuts
- **Real-time Pricing**: Dynamic price calculation with instant updates
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript integration
- **Scalable Architecture**: Easy to extend with new items and features

## 🚀 Live Demo

\`\`\`bash

# Clone the repository

git clone https://github.com/Rida-Lamiini/ice-cream-builder.git

# Navigate to project directory

cd ice-cream-builder

# Install dependencies

npm install

# Start development server

npm run dev
\`\`\`

Visit \`http://localhost:5173\` to see the application in action.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **State Management**: React Context API + useReducer
- **Icons**: Lucide React

## 📁 Project Structure

\`\`\`
src/
├── components/
│ ├── ui/ # shadcn/ui components
│ │ ├── button.tsx
│ │ ├── card.tsx
│ │ ├── badge.tsx
│ │ └── separator.tsx
│ ├── features/ # Feature-specific components
│ │ ├── ItemRow.tsx # Individual item with counter
│ │ ├── ItemSection.tsx # Category sections
│ │ ├── BasketSummary.tsx # Checkout component
│ │ ├── Header.tsx # App header
│ │ ├── PriceBreakdown.tsx # Order summary
│ │ └── EmptyState.tsx # Welcome screen
│ └── IceCreamBuilder.tsx # Main component
├── context/
│ └── IceCreamContext.tsx # Global state management
├── data/
│ └── ice-cream-items.ts # Product data
├── types/
│ └── ice-cream.ts # TypeScript definitions
├── hooks/
│ └── useIceCreamValidation.ts # Custom validation hook
├── lib/
│ └── utils.ts # Utility functions
└── App.tsx # Root component
\`\`\`

## 🔧 Development Scripts

\`\`\`bash

# Development

npm run dev # Start development server
npm run build # Build for production
npm run preview # Preview production build
npm run lint # Run ESLint

# Type Checking

npm run type-check # TypeScript type checking
\`\`\`

## 📊 Features Breakdown

### ✅ Implemented Features

- [x] Interactive item counters with +/- buttons
- [x] Real-time price calculation
- [x] Smooth animations and transitions
- [x] Responsive mobile design
- [x] TypeScript integration
- [x] Basket functionality with reset
- [x] Success feedback messages
- [x] Color-coded item categories

## 🎨 Design System

### Color Palette

- **Primary**: Orange (#FF6B35) - Warm, appetizing
- **Secondary**: Pink (#FF8E9B) - Playful, sweet
- **Accent**: Purple (#6C5CE7) - Premium feel
- **Neutral**: Gray scale for text and backgrounds

### Typography

- **Headings**: Bold, modern sans-serif
- **Body**: Clean, readable font stack
- **Interactive**: Medium weight for buttons

### Spacing

- **Consistent Scale**: 4px base unit (4, 8, 12, 16, 20, 24...)
- **Responsive**: Adaptive spacing for different screen sizes

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful, accessible components
- **Framer Motion** for smooth animations
- **Tailwind CSS** for rapid styling
- **Lucide React** for consistent icons
- **Vite** for lightning-fast development

**Built with ❤️ and lots of ☕ for the love of 🍦**
