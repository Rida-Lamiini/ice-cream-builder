# 🍦 Interactive Ice Cream Builder

A modern, interactive React application that allows users to customize their own ice cream rolls by selecting flavors, sauces, and nuts — with real-time pricing and smooth animations.

---

## 🎯 Project Overview

This project was built as part of an interview exercise to demonstrate advanced React development skills, including state management, component architecture, animations, and scalable design patterns.

---

## ✨ Key Features

- ✅ **Interactive Customization** — Add/remove ice cream flavors, sauces, and nuts  
- 💰 **Real-time Pricing** — Dynamic total calculation that updates instantly  
- 🎞️ **Smooth Animations** — Powered by Framer Motion for engaging transitions  
- 📱 **Responsive Design** — Mobile-first layout using Tailwind CSS  
- 🔒 **Type Safety** — Built entirely with TypeScript  
- 🧱 **Scalable Architecture** — Easy to extend and maintain  

---

## 🚀 Live Demo

> 💻 Coming soon: [Live on Vercel](https://your-demo-link.com)

---

## 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/Rida-Lamiini/ice-cream-builder.git

# Navigate to project directory
cd ice-cream-builder

# Install dependencies
npm install

# Start development server
npm run dev
```

> Visit [http://localhost:5173](http://localhost:5173) to view the app locally.

---

## 🧰 Tech Stack

| Tool            | Purpose                           |
|----------------|------------------------------------|
| **React 18**    | Frontend Framework                 |
| **TypeScript**  | Type-safe development              |
| **Vite**        | Build tool for fast development    |
| **Tailwind CSS**| Utility-first styling              |
| **shadcn/ui**   | Accessible UI components           |
| **Framer Motion** | Animations and transitions       |
| **Lucide React**| Icon library                       |
| **Context API + useReducer** | State management      |

---

## 📁 Project Structure

```bash
src/
├── components/
│   ├── ui/                  # Shared UI components (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── separator.tsx
│   ├── features/            # Feature-specific components
│   │   ├── ItemRow.tsx
│   │   ├── ItemSection.tsx
│   │   ├── BasketSummary.tsx
│   │   ├── Header.tsx
│   │   ├── PriceBreakdown.tsx
│   │   └── EmptyState.tsx
│   └── IceCreamBuilder.tsx # Main layout
├── context/
│   └── IceCreamContext.tsx  # Global state
├── data/
│   └── ice-cream-items.ts   # Static item data
├── types/
│   └── ice-cream.ts         # Type definitions
├── hooks/
│   └── useIceCreamValidation.ts
├── lib/
│   └── utils.ts
└── App.tsx                  # Root component
```

---

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint

# Type checking
npm run type-check
```

---

## ✅ Features Checklist

- [x] Interactive item counters with +/– buttons  
- [x] Real-time total price calculation  
- [x] Smooth animations for interaction feedback  
- [x] Mobile-first responsive layout  
- [x] Basket functionality with reset state  
- [x] Success toast/message on basket addition  
- [x] Category styling with color differentiation  
- [x] Componentized architecture using clean patterns  

---

## 🎨 Design System

### 🎨 Color Palette

| Color      | Hex       | Purpose          |
|------------|-----------|------------------|
| **Primary**| `#FF6B35` | Appetizing orange |
| **Secondary**| `#FF8E9B` | Playful pink     |
| **Accent** | `#6C5CE7` | Premium purple   |
| **Neutral**| Grayscale | Text & background|

### 🖋 Typography

- **Headings**: Bold modern sans-serif  
- **Body**: Clean, readable system font stack  
- **Buttons**: Medium weight for clarity  

### 📏 Spacing System

- **Base unit**: 4px scale (e.g., 4, 8, 12, 16, 20…)  
- **Responsive padding/margin** for all screen sizes  

---

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vite](https://vitejs.dev/)

---

**Built with ❤️ and lots of ☕ — for the love of 🍦**
