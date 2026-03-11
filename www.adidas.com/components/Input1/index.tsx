import * as React from "react";
import { cn } from "@/lib/utils";
import { input1Variants, type Input1Variants } from "./variants";

/**
 * Input1
 * 
 * Extracted from source site.
 * Original structure:
 * <input placeholder="Search" data-auto-id="searchinput-desktop" class="_input_19qjv_75">
 * 
 * Observed on: https://www.adidas.com, https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 2x
 */
export interface Input1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Input1Variants {}

export const Input1 = React.forwardRef<HTMLDivElement, Input1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(input1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Input1.displayName = "Input1";
