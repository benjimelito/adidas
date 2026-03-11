import { cva, type VariantProps } from "class-variance-authority";

/**
 * Footer1 Variants
 * Extracted from: https://www.adidas.com, https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 2x
 */
export const footer1Variants = cva(
  // Base styles observed
  "_feedback_cf007_63",
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

export type Footer1Variants = VariantProps<typeof footer1Variants>;
