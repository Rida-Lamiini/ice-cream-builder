"use client";
import { motion } from "framer-motion";
import { IceCream2, ArrowDown } from "lucide-react";

export function EmptyState() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="text-center py-12"
    >
      <div className="mb-6">
        <motion.div
          animate={{
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 3,
          }}
          className="inline-block p-4 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full mb-4"
        >
          <IceCream2 className="h-12 w-12 text-orange-500" />
        </motion.div>
      </div>

      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        Start Building Your Ice Cream!
      </h3>
      <p className="text-gray-500 mb-4 max-w-md mx-auto">
        Choose from our delicious tastes, sauces, and nuts to create your
        perfect ice cream roll.
      </p>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="text-orange-400"
      >
        <ArrowDown className="h-6 w-6 mx-auto" />
      </motion.div>
    </motion.div>
  );
}
