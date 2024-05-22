import React from "react";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../../variants/buttonVariants";
import { VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        {...rest}
        className={cn(buttonVariants({ variant, size }), rest.className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
