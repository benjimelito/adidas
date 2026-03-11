import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button3 Variants
 * Extracted from: https://www.adidas.com, https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 2x
 */
export const button3Variants = cva(
  // Base styles observed
  "_mobile_menu_toggle_1loju_62",
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

export type Button3Variants = VariantProps<typeof button3Variants>;
