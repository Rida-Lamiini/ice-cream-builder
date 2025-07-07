import React, { createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";

import type {
  IceCreamState,
  IceCreamContextType,
  IceCreamItem,
  CartItem,
} from "@/types/ice-cream";

// Initial state
const initialState: IceCreamState = {
  items: [],
  totalPrice: 0,
  basketCount: 0,
};

// Action types
type IceCreamAction =
  | { type: "ADD_ITEM"; payload: IceCreamItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "RESET_CART" }
  | { type: "ADD_TO_BASKET" };

// Reducer
function iceCreamReducer(
  state: IceCreamState,
  action: IceCreamAction
): IceCreamState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );

        return {
          ...state,
          items: updatedItems,
          totalPrice: state.totalPrice + action.payload.price,
        };
      }

      const newItem: CartItem = { ...action.payload, quantity: 1 };

      return {
        ...state,
        items: [...state.items, newItem],
        totalPrice: state.totalPrice + newItem.price,
      };
    }

    case "REMOVE_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (existingItemIndex === -1) return state;

      const existingItem = state.items[existingItemIndex];

      if (existingItem.quantity > 1) {
        const updatedItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );

        return {
          ...state,
          items: updatedItems,
          totalPrice: state.totalPrice - existingItem.price,
        };
      }

      const updatedItems = state.items.filter(
        (_, index) => index !== existingItemIndex
      );

      return {
        ...state,
        items: updatedItems,
        totalPrice: state.totalPrice - existingItem.price,
      };
    }

    case "RESET_CART":
      return {
        ...state,
        items: [],
        totalPrice: 0,
      };

    case "ADD_TO_BASKET":
      return {
        ...state,
        basketCount: state.basketCount + 1,
      };

    default:
      return state;
  }
}

// Context
const IceCreamContext = createContext<IceCreamContextType | undefined>(
  undefined
);

// Provider
export const IceCreamProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(iceCreamReducer, initialState);

  const addItem = (item: IceCreamItem) =>
    dispatch({ type: "ADD_ITEM", payload: item });

  const removeItem = (itemId: string) =>
    dispatch({ type: "REMOVE_ITEM", payload: itemId });

  const resetCart = () => dispatch({ type: "RESET_CART" });

  const addToBasket = () => dispatch({ type: "ADD_TO_BASKET" });

  const value: IceCreamContextType = {
    state,
    addItem,
    removeItem,
    resetCart,
    addToBasket,
  };

  return (
    <IceCreamContext.Provider value={value}>
      {children}
    </IceCreamContext.Provider>
  );
};

// Hook
export const useIceCream = (): IceCreamContextType => {
  const context = useContext(IceCreamContext);
  if (!context) {
    throw new Error("useIceCream must be used within an IceCreamProvider");
  }
  return context;
};
