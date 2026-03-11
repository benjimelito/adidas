import { cva, type VariantProps } from "class-variance-authority";

/**
 * Modal2 Variants
 * Extracted from: https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 1x
 */
export const modal2Variants = cva(
  // Base styles observed
  "stripes_v7_gl-cta-icon-wrapper stripes_v7_gl-cta-icon-wrapper--secondary-large-onlight stripes_v7_gl-modal__close-button",
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

export type Modal2Variants = VariantProps<typeof modal2Variants>;
