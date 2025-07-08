"use client";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useIceCreamValidation } from "@/hooks/useIceCreamValidation";

interface ValidationDisplayProps {
  rules?: {
    maxFlavors?: number;
    maxSauces?: number;
    maxNuts?: number;
    minTotal?: number;
    maxTotal?: number;
  };
}

export function ValidationDisplay({ rules }: ValidationDisplayProps) {
  const { validationErrors, isValid, flavorCount, sauceCount, nutCount } =
    useIceCreamValidation(rules);

  if (!rules) return null;

  return (
    <AnimatePresence>
      {(validationErrors.length > 0 ||
        (rules.maxFlavors && flavorCount > 0)) && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card
            className={`p-4 mb-4 ${
              isValid
                ? "bg-green-50 border-green-200"
                : "bg-red-50 border-red-200"
            }`}
          >
            <div className="flex items-start gap-3">
              {isValid ? (
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
              ) : (
                <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
              )}

              <div className="flex-1">
                <h4
                  className={`font-medium ${
                    isValid ? "text-green-800" : "text-red-800"
                  }`}
                >
                  {isValid ? "Order Valid" : "Order Validation"}
                </h4>

                {/* Show current counts */}
                <div className="mt-2 space-y-1 text-sm">
                  {rules.maxFlavors && (
                    <div
                      className={
                        flavorCount > rules.maxFlavors
                          ? "text-red-600"
                          : "text-gray-600"
                      }
                    >
                      Flavors: {flavorCount}/{rules.maxFlavors}
                    </div>
                  )}
                  {rules.maxSauces && (
                    <div
                      className={
                        sauceCount > rules.maxSauces
                          ? "text-red-600"
                          : "text-gray-600"
                      }
                    >
                      Sauces: {sauceCount}/{rules.maxSauces}
                    </div>
                  )}
                  {rules.maxNuts && (
                    <div
                      className={
                        nutCount > rules.maxNuts
                          ? "text-red-600"
                          : "text-gray-600"
                      }
                    >
                      Nuts: {nutCount}/{rules.maxNuts}
                    </div>
                  )}
                </div>

                {/* Show errors */}
                {validationErrors.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {validationErrors.map((error, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-sm text-red-600"
                      >
                        • {error}
                      </motion.li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
