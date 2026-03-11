import * as React from "react";
import { cn } from "@/lib/utils";
import { nav1Variants, type Nav1Variants } from "./variants";

/**
 * Nav1
 * 
 * Extracted from source site.
 * Original structure:
 * <nav class="_desktop_customer_info_links_5w0h1_62" aria-label="Customer information."><ul class="_header_top_5w0h1_73" data-auto-id="header-top"><li><a manual_cm_sp="header-_-customerinfo-_-help" data
 * 
 * Observed on: https://www.adidas.com, https://www.adidas.com/us/adifom-iiinfinity-mules/IG6969.html
 * Usage count: 2x
 */
export interface Nav1Props
  extends React.HTMLAttributes<HTMLDivElement>,
    Nav1Variants {}

export const Nav1 = React.forwardRef<HTMLDivElement, Nav1Props>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(nav1Variants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Nav1.displayName = "Nav1";
