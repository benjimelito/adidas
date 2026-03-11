import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button1 Variants
 * Extracted from: https://www.adidas.com, https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 2x
 */
export const button1Variants = cva(
  // Base styles observed
  "_usp-bar_1rxr6_62",
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

export type Button1Variants = VariantProps<typeof button1Variants>;
