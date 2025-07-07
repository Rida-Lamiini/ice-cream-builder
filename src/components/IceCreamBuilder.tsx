import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIceCream } from "@/context/IceCreamContext";
import { iceCreamItems } from "@/data/ice-cream-items";
import { ShoppingBasket } from "lucide-react";
import { motion } from "framer-motion";
import ItemCounter from "./ItemCounter";

export default function IceCreamBuilder() {
  const { state, addToBasket } = useIceCream();

  const tastes = iceCreamItems.filter((item) => item.category === "taste");
  const sauces = iceCreamItems.filter((item) => item.category === "sauce");
  const nuts = iceCreamItems.filter((item) => item.category === "nut");

  const hasItems = state.items.length > 0;

  const handleAddToBasket = () => {
    if (hasItems) {
      addToBasket();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header with basket */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Make it Yourself</h2>
        <motion.div
          className="relative"
          animate={{ scale: state.basketCount > 0 ? [1, 1.2, 1] : 1 }}
          transition={{ duration: 0.3 }}
        >
          <ShoppingBasket className="w-8 h-8 text-gray-600" />
          {state.basketCount > 0 && (
            <motion.span
              className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {state.basketCount}
            </motion.span>
          )}
        </motion.div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Customize Your Ice Cream Roll</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Tastes Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Tastes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tastes.map((item) => (
                <ItemCounter key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Sauces Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Sauces</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sauces.map((item) => (
                <ItemCounter key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Nuts Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Nuts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {nuts.map((item) => (
                <ItemCounter key={item.id} item={item} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add to Basket Button */}
      <motion.div
        className="text-center"
        animate={{ scale: hasItems ? 1 : 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          variant="orange"
          size="lg"
          onClick={handleAddToBasket}
          disabled={!hasItems}
          className="text-lg px-8 py-3"
        >
          Add it to basket - {state.totalPrice} MAD
        </Button>
      </motion.div>
    </div>
  );
}
