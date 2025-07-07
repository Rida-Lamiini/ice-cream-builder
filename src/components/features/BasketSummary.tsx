"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useIceCream } from "@/context/IceCreamContext";

export function BasketSummary() {
  const { state, dispatch } = useIceCream();

  const handleAddToBasket = () => {
    dispatch({ type: "ADD_TO_BASKET" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  const hasItems = state.totalPrice > 0;
  const itemCount = Object.values(state.items).reduce(
    (sum, count) => sum + count,
    0
  );

  return (
    <Card className="p-6 sticky bottom-4 bg-white/95 backdrop-blur-sm border-2 border-orange-200">
      <div className="space-y-4">
        {/* Price Display */}
        <div className="text-center">
          <motion.div
            key={state.totalPrice}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-bold text-gray-800"
          >
            {state.totalPrice} MAD
          </motion.div>
          <p className="text-sm text-gray-500 mt-1">
            {itemCount > 0
              ? `${itemCount} item${itemCount > 1 ? "s" : ""} selected`
              : "No items selected"}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* Reset Button */}
          <AnimatePresence>
            {hasItems && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="h-12 px-4 border-gray-300 hover:border-red-400 hover:bg-red-50 bg-transparent"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Add to Basket Button */}
          <Button
            onClick={handleAddToBasket}
            disabled={!hasItems}
            className={`flex-1 h-12 text-base font-semibold transition-all duration-300 ${
              hasItems
                ? "bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <motion.div
              className="flex items-center justify-center gap-2"
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Basket</span>
              <AnimatePresence>
                {state.basketCount > 0 && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    className="bg-white text-orange-500 rounded-full px-2 py-1 text-xs font-bold min-w-[20px]"
                  >
                    {state.basketCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </Button>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {state.showSuccessMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center p-3 bg-green-50 border border-green-200 rounded-lg"
            >
              <p className="text-green-700 font-medium">
                ✅ Added to basket successfully!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}
