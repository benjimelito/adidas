import * as React from "react";
import { cn } from "@/lib/utils";
import { card2Variants, type Card2Variants } from "./variants";

/**
 * Card2
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="_ugc-carousel-card__information_1j3jn_152"><button type="button" class="stripes_v7_gl-button-link stripes_v7_gl-button-link--onlight--large _ugc-carousel-card__cta_1j3jn_162" id="ugc-carou
 * 
 * Observed on: https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 1x
 */
export interface Card2Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card2Variants {}

export const Card2 = React.forwardRef<HTMLDivElement, Card2Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card2Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card2.displayName = "Card2";
