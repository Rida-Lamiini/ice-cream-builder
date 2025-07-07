"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useIceCream } from "@/context/IceCreamContext";
import type { IceCreamItem } from "@/types/ice-cream";
import { cn } from "@/lib/utils";

interface ItemRowProps {
  item: IceCreamItem;
  quantity: number;
  className?: string;
}

export function ItemRow({ item, quantity, className }: ItemRowProps) {
  const { dispatch } = useIceCream();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT_ITEM", payload: item.id });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT_ITEM", payload: item.id });
  };

  const totalPrice = item.price * quantity;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={cn("w-full", className)}
    >
      <Card className="p-4 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between gap-4">
          {/* Item Info */}
          <div className="flex items-center gap-3 flex-1">
            {/* Color Indicator */}
            <div
              className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
              style={{ backgroundColor: item.color }}
            />

            {/* Item Details */}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                {item.name}
              </h3>
              <p className="text-xs md:text-sm text-gray-500">
                {item.price} MAD/1 roll
              </p>
            </div>
          </div>

          {/* Price Display */}
          <div className="text-right min-w-[60px]">
            <AnimatePresence mode="wait">
              {quantity > 0 && (
                <motion.div
                  key={totalPrice}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-semibold text-orange-600"
                >
                  {totalPrice} MAD
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Counter Controls */}
          <div className="flex items-center gap-2">
            <AnimatePresence>
              {quantity > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 10 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDecrement}
                    className="h-8 w-8 p-0 rounded-full border-gray-300 hover:border-red-400 hover:bg-red-50 transition-colors bg-transparent"
                  >
                    <Minus className="h-3 w-3 text-red-500" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Quantity Display */}
            <motion.div
              key={quantity}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
              className="min-w-[32px] text-center"
            >
              <span className="text-lg font-bold text-gray-800">
                {quantity}
              </span>
            </motion.div>

            {/* Plus Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={handleIncrement}
              className="h-8 w-8 p-0 rounded-full border-gray-300 hover:border-green-400 hover:bg-green-50 transition-colors bg-transparent"
            >
              <Plus className="h-3 w-3 text-green-500" />
            </Button>
          </div>
        </div>

        {/* Quantity Indicator Bar */}
        <AnimatePresence>
          {quantity > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 pt-3 border-t border-gray-100"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Quantity:</span>
                <div className="flex gap-1">
                  {Array.from({ length: Math.min(quantity, 5) }).map(
                    (_, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    )
                  )}
                  {quantity > 5 && (
                    <span className="text-xs text-gray-500 ml-1">
                      +{quantity - 5} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
}
