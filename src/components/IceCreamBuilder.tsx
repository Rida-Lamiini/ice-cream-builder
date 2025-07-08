"use client";
import { motion, AnimatePresence } from "framer-motion";
import { IceCream, Droplets, Nut } from "lucide-react";
import { Header } from "./features/Header";
import { ItemSection } from "./features/ItemSection";
import { BasketSummary } from "./features/BasketSummary";
import { PriceBreakdown } from "./features/PriceBreakdown";
import { EmptyState } from "./features/EmptyState";
import { useIceCream } from "@/context/IceCreamContext";
import { iceCreamData } from "@/data/ice-cream-items";

function IceCreamBuilder() {
  const { state } = useIceCream();
  const hasItems = state.totalPrice > 0;

  // Example validation rules - you can customize these
  const validationRules = {
    maxFlavors: 3,
    maxSauces: 2,
    maxNuts: 2,
    minTotal: 5,
    maxTotal: 100,
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            🍦 Make it Yourself
          </h2>
          <p className="text-gray-600">
            Create your perfect ice cream roll with custom flavors, sauces, and
            nuts
          </p>
        </motion.div>

        {/* Empty State */}
        <AnimatePresence>{!hasItems && <EmptyState />}</AnimatePresence>

        {/* Price Breakdown */}
        <AnimatePresence>{hasItems && <PriceBreakdown />}</AnimatePresence>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Tastes Section */}
          <ItemSection
            title="Tastes"
            items={iceCreamData.tastes}
            icon={<IceCream className="h-5 w-5 text-orange-500" />}
          />

          {/* Sauces Section */}
          <ItemSection
            title="Sauces"
            items={iceCreamData.sauces}
            icon={<Droplets className="h-5 w-5 text-orange-500" />}
          />

          {/* Nuts Section */}
          <ItemSection
            title="Nuts"
            items={iceCreamData.nuts}
            icon={<Nut className="h-5 w-5 text-orange-500" />}
          />

          {/* Advanced Basket Summary with Validation */}
          <BasketSummary validationRules={validationRules} />
        </div>
      </div>
    </div>
  );
}

export default IceCreamBuilder;
