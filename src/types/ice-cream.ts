export interface IceCreamItem {
  id: string;
  name: string;
  price: number;
  color: string;
  category: "taste" | "sauce" | "nut";
}

export interface IceCreamData {
  tastes: IceCreamItem[];
  sauces: IceCreamItem[];
  nuts: IceCreamItem[];
}

export interface CartItem extends IceCreamItem {
  quantity: number;
}
