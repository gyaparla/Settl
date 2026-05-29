import React from "react";
import { cn } from "../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  `
    "inline-flex items-center justify-center",
    "rounded-xl",
    "font-medium",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
  `,
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:opacity-90",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        outline: "border border-border bg-transparent hover:bg-accent",

        ghost: "hover:bg-accent hover:text-accent-foreground",

        destructive:
          "bg-destructive text-destructive-foreground hover:opacity-90",
      },

      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 py-2",
        lg: "h-11 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
