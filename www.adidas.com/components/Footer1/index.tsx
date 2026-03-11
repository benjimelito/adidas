import * as React from "react";
import { cn } from "@/lib/utils";
import { footer1Variants, type Footer1Variants } from "./variants";

/**
 * Footer1
 * 
 * Extracted from source site.
 * Original structure:
 * <footer id="adidas-main-footer" data-auto-id="footer" tabindex="-1"><div class="_feedback_cf007_63"><h5>Your opinion counts</h5><p>We strive to serve you better and appreciate your feedback</p><div id
 * 
 * Observed on: https://www.adidas.com, https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 2x
 */
export interface Footer1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Footer1Variants {}

export const Footer1 = React.forwardRef<HTMLDivElement, Footer1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(footer1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Footer1.displayName = "Footer1";
