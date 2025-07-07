export interface IceCreamItem {
  id: string;
  name: string;
  price: number;
  category: "taste" | "sauce" | "nut";
  color?: string;
  image?: string;
}

export interface CartItem extends IceCreamItem {
  quantity: number;
}

export interface IceCreamState {
  items: CartItem[];
  totalPrice: number;
  basketCount: number;
}

export interface IceCreamContextType {
  state: IceCreamState;
  addItem: (item: IceCreamItem) => void;
  removeItem: (itemId: string) => void;
  resetCart: () => void;
  addToBasket: () => void;
}
