import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button2 Variants
 * Extracted from: https://www.adidas.com, https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 2x
 */
export const button2Variants = cva(
  // Base styles observed
  "",
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

export type Button2Variants = VariantProps<typeof button2Variants>;
