import * as React from "react";
import { cn } from "@/lib/utils";
import { card1Variants, type Card1Variants } from "./variants";

/**
 * Card1
 * 
 * Extracted from source site.
 * Original structure:
 * <div class="_ugc-carousel-card_1j3jn_62" id="ugc-carousel-pdp-ugc-carousel-item-4320622358-card"><div class="_ugc-carousel-card__picture-container_1j3jn_97" data-auto-id="picture"><picture><source src
 * 
 * Observed on: https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 1x
 */
export interface Card1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Card1Variants {}

export const Card1 = React.forwardRef<HTMLDivElement, Card1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(card1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Card1.displayName = "Card1";
