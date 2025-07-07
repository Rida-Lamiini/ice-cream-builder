"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";

export interface IceCreamState {
  items: Record<string, number>;
  totalPrice: number;
  basketCount: number;
  showSuccessMessage: boolean;
}

export type IceCreamAction =
  | { type: "INCREMENT_ITEM"; payload: string }
  | { type: "DECREMENT_ITEM"; payload: string }
  | { type: "ADD_TO_BASKET" }
  | { type: "RESET" }
  | { type: "HIDE_SUCCESS_MESSAGE" };

const initialState: IceCreamState = {
  items: {},
  totalPrice: 0,
  basketCount: 0,
  showSuccessMessage: false,
};

// Import ice cream data for price calculation
import { iceCreamData } from "@/data/ice-cream-items";

const allItems = [
  ...iceCreamData.tastes,
  ...iceCreamData.sauces,
  ...iceCreamData.nuts,
];

function iceCreamReducer(
  state: IceCreamState,
  action: IceCreamAction
): IceCreamState {
  switch (action.type) {
    case "INCREMENT_ITEM": {
      const newItems = {
        ...state.items,
        [action.payload]: (state.items[action.payload] || 0) + 1,
      };

      const totalPrice = Object.entries(newItems).reduce(
        (total, [itemId, quantity]) => {
          const item = allItems.find((item) => item.id === itemId);
          return total + (item ? item.price * quantity : 0);
        },
        0
      );

      return {
        ...state,
        items: newItems,
        totalPrice,
        showSuccessMessage: false,
      };
    }

    case "DECREMENT_ITEM": {
      const currentQuantity = state.items[action.payload] || 0;
      if (currentQuantity <= 0) return state;

      const newItems = {
        ...state.items,
        [action.payload]: currentQuantity - 1,
      };

      // Remove item if quantity becomes 0
      if (newItems[action.payload] === 0) {
        delete newItems[action.payload];
      }

      const totalPrice = Object.entries(newItems).reduce(
        (total, [itemId, quantity]) => {
          const item = allItems.find((item) => item.id === itemId);
          return total + (item ? item.price * quantity : 0);
        },
        0
      );

      return {
        ...state,
        items: newItems,
        totalPrice,
        showSuccessMessage: false,
      };
    }

    case "ADD_TO_BASKET": {
      if (state.totalPrice === 0) return state;

      return {
        ...initialState,
        basketCount: state.basketCount + 1,
        showSuccessMessage: true,
      };
    }

    case "RESET": {
      return {
        ...state,
        items: {},
        totalPrice: 0,
        showSuccessMessage: false,
      };
    }

    case "HIDE_SUCCESS_MESSAGE": {
      return {
        ...state,
        showSuccessMessage: false,
      };
    }

    default:
      return state;
  }
}

const IceCreamContext = createContext<{
  state: IceCreamState;
  dispatch: React.Dispatch<IceCreamAction>;
} | null>(null);

export function IceCreamProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(iceCreamReducer, initialState);

  // Auto-hide success message after 3 seconds
  React.useEffect(() => {
    if (state.showSuccessMessage) {
      const timer = setTimeout(() => {
        dispatch({ type: "HIDE_SUCCESS_MESSAGE" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.showSuccessMessage]);

  return (
    <IceCreamContext.Provider value={{ state, dispatch }}>
      {children}
    </IceCreamContext.Provider>
  );
}

export function useIceCream() {
  const context = useContext(IceCreamContext);
  if (!context) {
    throw new Error("useIceCream must be used within an IceCreamProvider");
  }
  return context;
}
