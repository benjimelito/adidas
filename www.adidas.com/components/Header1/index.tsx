import * as React from "react";
import { cn } from "@/lib/utils";
import { header1Variants, type Header1Variants } from "./variants";

/**
 * Header1
 * 
 * Extracted from source site.
 * Original structure:
 * <header data-auto-id="header" class="_header_lacb8_86 _scroll_effect_14cx1_62"><button class="_usp-bar_1rxr6_62" data-auto-id="header-promo-callout" data-testid="usp-bar" aria-label="Open information 
 * 
 * Observed on: https://www.adidas.com, https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 2x
 */
export interface Header1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Header1Variants {}

export const Header1 = React.forwardRef<HTMLDivElement, Header1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(header1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Header1.displayName = "Header1";
