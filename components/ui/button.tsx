import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-center text-sm font-medium leading-tight ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-300 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 whitespace-normal break-words",
  {
    variants: {
      variant: {
        default: "bg-[var(--brand-600)] text-white hover:bg-[var(--brand-700)]",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border border-[var(--brand-500)] bg-transparent text-[var(--brand-700)] hover:bg-[var(--brand-50)]",
        secondary: "bg-stone-200 text-stone-900 hover:bg-stone-300",
        ghost: "hover:bg-stone-100 hover:text-stone-900",
        link: "text-[var(--brand-600)] underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-12 px-6 py-3",
        sm: "min-h-9 px-3 py-2",
        lg: "min-h-14 px-6 py-4 text-base sm:px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
