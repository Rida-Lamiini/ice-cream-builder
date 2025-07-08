"use client";

import { useState, useEffect } from "react";
import { useIceCream } from "@/context/IceCreamContext";

interface ValidationRules {
  maxFlavors?: number;
  maxSauces?: number;
  maxNuts?: number;
  minTotal?: number;
  maxTotal?: number;
}

export function useIceCreamValidation(rules: ValidationRules = {}) {
  const { state } = useIceCream();
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  useEffect(() => {
    const errors: string[] = [];

    // Count items by category
    const flavorCount = Object.entries(state.items)
      .filter(
        ([id]) =>
          id.includes("caramel") ||
          id.includes("vanilla") ||
          id.includes("chocolate") ||
          id.includes("strawberry")
      )
      .reduce((sum, [, quantity]) => sum + quantity, 0);

    const sauceCount = Object.entries(state.items)
      .filter(([id]) => id.includes("sauce"))
      .reduce((sum, [, quantity]) => sum + quantity, 0);

    const nutCount = Object.entries(state.items)
      .filter(
        ([id]) =>
          id.includes("almonds") ||
          id.includes("walnuts") ||
          id.includes("pistachios")
      )
      .reduce((sum, [, quantity]) => sum + quantity, 0);

    // Validate rules
    if (rules.maxFlavors && flavorCount > rules.maxFlavors) {
      errors.push(`Maximum ${rules.maxFlavors} flavors allowed`);
    }

    if (rules.maxSauces && sauceCount > rules.maxSauces) {
      errors.push(`Maximum ${rules.maxSauces} sauces allowed`);
    }

    if (rules.maxNuts && nutCount > rules.maxNuts) {
      errors.push(`Maximum ${rules.maxNuts} nuts allowed`);
    }

    if (rules.minTotal && state.totalPrice < rules.minTotal) {
      errors.push(`Minimum order value is ${rules.minTotal} MAD`);
    }

    if (rules.maxTotal && state.totalPrice > rules.maxTotal) {
      errors.push(`Maximum order value is ${rules.maxTotal} MAD`);
    }

    setValidationErrors(errors);
  }, [state.items, state.totalPrice, rules]);

  return {
    validationErrors,
    isValid: validationErrors.length === 0,
    flavorCount: Object.entries(state.items)
      .filter(([id]) =>
        ["caramel", "vanilla", "chocolate", "strawberry"].includes(id)
      )
      .reduce((sum, [, quantity]) => sum + quantity, 0),
    sauceCount: Object.entries(state.items)
      .filter(([id]) => id.includes("sauce"))
      .reduce((sum, [, quantity]) => sum + quantity, 0),
    nutCount: Object.entries(state.items)
      .filter(([id]) => ["almonds", "walnuts", "pistachios"].includes(id))
      .reduce((sum, [, quantity]) => sum + quantity, 0),
  };
}
