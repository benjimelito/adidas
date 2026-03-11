import * as React from "react";
import { cn } from "@/lib/utils";
import { card3Variants, type Card3Variants } from "./variants";

/**
 * Card3
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="_card-teaser-cta_1bspm_180"><button type="button" class="stripes_v7_gl-button-link stripes_v7_gl-button-link--onlight--large" id="gl-button-link-195223" data-tracking-link="SLOT-8.1-_-glob
 * 
 * Observed on: https://www.adidas.com
 * Usage count: 1x
 */
export interface Card3Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card3Variants {}

export const Card3 = React.forwardRef<HTMLDivElement, Card3Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card3Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card3.displayName = "Card3";
