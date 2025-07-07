"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ItemRow } from "./ItemRow";
import type { IceCreamItem } from "@/types/ice-cream";
import { useIceCream } from "@/context/IceCreamContext";

interface ItemSectionProps {
  title: string;
  items: IceCreamItem[];
  icon?: React.ReactNode;
}

export function ItemSection({ title, items, icon }: ItemSectionProps) {
  const { state } = useIceCream();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-4"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="p-2 rounded-lg bg-orange-100">{icon}</div>}
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>

      {/* Items Grid */}
      <motion.div className="space-y-3" variants={containerVariants}>
        {items.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <ItemRow item={item} quantity={state.items[item.id] || 0} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
