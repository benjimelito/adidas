import * as React from "react";
import { cn } from "@/lib/utils";
import { input2Variants, type Input2Variants } from "./variants";

/**
 * Input2
 * 
 * Extracted from source site.
 * Original structure:
 * <input type="radio" name="gl-star-rating__star-1" class="stripes_v7_gl-screen-reader-only" readonly="" id="gl-star-rating__star-1" value="1">
 * 
 * Observed on: https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 2x
 */
export interface Input2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Input2Variants {}

export const Input2 = React.forwardRef<HTMLDivElement, Input2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(input2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Input2.displayName = "Input2";
