import * as React from "react";
import { cn } from "@/lib/utils";
import { button2Variants, type Button2Variants } from "./variants";

/**
 * Button2
 * 
 * Extracted from source site.
 * Original structure:
 * <button manual_cm_sp="header-_-customerinfo-_-join adiClub" data-cms-id="ci_3" data-auto-id="register-modal" aria-label="Become an adiClub member.">join adiClub</button>
 * 
 * Observed on: https://www.adidas.com, https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 2x
 */
export interface Button2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Button2Variants {}

export const Button2 = React.forwardRef<HTMLDivElement, Button2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(button2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button2.displayName = "Button2";
