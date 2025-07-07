import type { IceCreamData } from "@/types/ice-cream";

export const iceCreamData: IceCreamData = {
  tastes: [
    {
      id: "caramel",
      name: "Caramel Taste",
      price: 7,
      color: "#D2691E",
      category: "taste",
    },
    {
      id: "vanilla",
      name: "Vanilla Taste",
      price: 6,
      color: "#F5DEB3",
      category: "taste",
    },
    {
      id: "chocolate",
      name: "Chocolate Taste",
      price: 8,
      color: "#8B4513",
      category: "taste",
    },
    {
      id: "strawberry",
      name: "Strawberry Taste",
      price: 7,
      color: "#FFB6C1",
      category: "taste",
    },
  ],
  sauces: [
    {
      id: "chocolate-sauce",
      name: "Chocolate Sauce",
      price: 3,
      color: "#654321",
      category: "sauce",
    },
    {
      id: "caramel-sauce",
      name: "Caramel Sauce",
      price: 3,
      color: "#CD853F",
      category: "sauce",
    },
    {
      id: "berry-sauce",
      name: "Berry Sauce",
      price: 4,
      color: "#DC143C",
      category: "sauce",
    },
  ],
  nuts: [
    {
      id: "almonds",
      name: "Almonds",
      price: 5,
      color: "#DEB887",
      category: "nut",
    },
    {
      id: "walnuts",
      name: "Walnuts",
      price: 6,
      color: "#8B4513",
      category: "nut",
    },
    {
      id: "pistachios",
      name: "Pistachios",
      price: 7,
      color: "#9ACD32",
      category: "nut",
    },
  ],
};
