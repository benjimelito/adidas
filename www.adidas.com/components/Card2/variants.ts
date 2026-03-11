import { cva, type VariantProps } from "class-variance-authority";

/**
 * Card2 Variants
 * Extracted from: https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 1x
 */
export const card2Variants = cva(
  // Base styles observed
  "_ugc-carousel-card__information_1j3jn_152",
  {
    variants: {
      variant: {
        default: "",
        // Add more variants based on observed patterns
      },
      size: {
        default: "",
        // Add size variants if detected
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type Card2Variants = VariantProps<typeof card2Variants>;
