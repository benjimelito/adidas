import { cva, type VariantProps } from "class-variance-authority";

/**
 * Modal1 Variants
 * Extracted from: https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 2x
 */
export const modal1Variants = cva(
  // Base styles observed
  "stripes_v7_gl-modal__body",
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

export type Modal1Variants = VariantProps<typeof modal1Variants>;
