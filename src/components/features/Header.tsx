"use client";
import { motion } from "framer-motion";
import { ShoppingCart, IceCream2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIceCream } from "@/context/IceCreamContext";

export function Header() {
  const { state } = useIceCream();

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-orange-200 shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-orange-400 to-pink-500 rounded-xl">
              <IceCream2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Ice Cream Builder
              </h1>
              <p className="text-sm text-gray-500">Make it Yourself</p>
            </div>
          </div>

          {/* Basket Icon */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-3 bg-orange-50 rounded-full border border-orange-200">
              <ShoppingCart className="h-6 w-6 text-orange-600" />
            </div>

            {/* Basket Count Badge */}
            {state.basketCount > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2"
              >
                <Badge className="bg-red-500 text-white px-2 py-1 text-xs">
                  {state.basketCount}
                </Badge>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
