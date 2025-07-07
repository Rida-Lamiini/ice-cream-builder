import type { IceCreamItem } from "@/types/ice-cream";

export const iceCreamItems: IceCreamItem[] = [
  // Tastes
  {
    id: "caramel-taste",
    name: "Caramel",
    price: 7,
    category: "taste",
    color: "#ed7611",
  },
  {
    id: "chocolate-taste",
    name: "Chocolate",
    price: 8,
    category: "taste",
    color: "#8b4513",
  },
  {
    id: "vanilla-taste",
    name: "Vanilla",
    price: 6,
    category: "taste",
    color: "#f5f5dc",
  },
  {
    id: "strawberry-taste",
    name: "Strawberry",
    price: 7,
    category: "taste",
    color: "#ff69b4",
  },

  // Sauces
  {
    id: "chocolate-sauce",
    name: "Chocolate Sauce",
    price: 3,
    category: "sauce",
    color: "#654321",
  },
  {
    id: "caramel-sauce",
    name: "Caramel Sauce",
    price: 3,
    category: "sauce",
    color: "#d2691e",
  },
  {
    id: "strawberry-sauce",
    name: "Strawberry Sauce",
    price: 3,
    category: "sauce",
    color: "#ff1493",
  },

  // Nuts
  {
    id: "almonds",
    name: "Almonds",
    price: 4,
    category: "nut",
    color: "#deb887",
  },
  {
    id: "walnuts",
    name: "Walnuts",
    price: 4,
    category: "nut",
    color: "#8b4513",
  },
  {
    id: "pistachios",
    name: "Pistachios",
    price: 5,
    category: "nut",
    color: "#9acd32",
  },
];
