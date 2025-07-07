"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useIceCream } from "@/context/IceCreamContext";
import { iceCreamData } from "@/data/ice-cream-items";

export function PriceBreakdown() {
  const { state } = useIceCream();

  const allItems = [
    ...iceCreamData.tastes,
    ...iceCreamData.sauces,
    ...iceCreamData.nuts,
  ];
  const selectedItems = Object.entries(state.items)
    .filter(([_, quantity]) => quantity > 0)
    .map(([itemId, quantity]) => {
      const item = allItems.find((item) => item.id === itemId);
      return item ? { ...item, quantity, total: item.price * quantity } : null;
    })
    .filter(Boolean);

  if (selectedItems.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-4 mb-4 bg-orange-50 border-orange-200">
        <h3 className="font-semibold text-gray-800 mb-3">Order Summary</h3>

        <div className="space-y-2">
          <AnimatePresence>
            {selectedItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="flex justify-between items-center text-sm"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span>{item.name}</span>
                  <span className="text-gray-500">× {item.quantity}</span>
                </div>
                <span className="font-medium">{item.total} MAD</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <Separator className="my-3" />

        <div className="flex justify-between items-center font-bold text-lg">
          <span>Total</span>
          <motion.span
            key={state.totalPrice}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            className="text-orange-600"
          >
            {state.totalPrice} MAD
          </motion.span>
        </div>
      </Card>
    </motion.div>
  );
}
