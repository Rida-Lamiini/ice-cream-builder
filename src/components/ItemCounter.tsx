import React from "react";
import { Button } from "@/components/ui/button";
import { useIceCream } from "@/context/IceCreamContext";
import type { IceCreamItem } from "@/types/ice-cream";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ItemCounterProps {
  item: IceCreamItem;
}

export default function ItemCounter({ item }: ItemCounterProps) {
  const { state, addItem, removeItem } = useIceCream();

  const cartItem = state.items.find((cartItem) => cartItem.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = () => {
    addItem(item);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      removeItem(item.id);
    }
  };

  return (
    <motion.div
      className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-center space-x-3">
        <div
          className="w-4 h-4 rounded-full border-2 border-gray-300"
          style={{ backgroundColor: item.color }}
        />
        <div>
          <h4 className="font-medium text-gray-800">{item.name}</h4>
          <p className="text-sm text-gray-500">{item.price} MAD/1 roll</p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <AnimatePresence>
          {quantity > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={handleRemove}
                className="h-8 w-8"
              >
                <Minus className="h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.span
          className="min-w-[2rem] text-center font-semibold text-lg"
          key={quantity}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {quantity}
        </motion.span>

        <Button
          variant="outline"
          size="icon"
          onClick={handleAdd}
          className="h-8 w-8"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}
