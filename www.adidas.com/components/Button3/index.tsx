import * as React from "react";
import { cn } from "@/lib/utils";
import { button3Variants, type Button3Variants } from "./variants";

/**
 * Button3
 * 
 * Extracted from source site.
 * Original structure:
 * <button class="_mobile_menu_toggle_1loju_62" aria-label="Navigation menu panel." data-auto-id="open-mobile-menu-button"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3
 * 
 * Observed on: https://www.adidas.com, https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 2x
 */
export interface Button3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Button3Variants {}

export const Button3 = React.forwardRef<HTMLDivElement, Button3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(button3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button3.displayName = "Button3";
