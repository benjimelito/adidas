import { cva, type VariantProps } from "class-variance-authority";

/**
 * Nav1 Variants
 * Extracted from: https://www.adidas.com, https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 2x
 */
export const nav1Variants = cva(
  // Base styles observed
  "_desktop_customer_info_links_5w0h1_62",
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

export type Nav1Variants = VariantProps<typeof nav1Variants>;
