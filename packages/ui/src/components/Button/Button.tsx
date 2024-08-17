import React, { forwardRef } from "react";

import { cn } from "@repo/tailwind-utils";
import { buttonVariants } from "./buttonVariants";
import { VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, children, ...rest }: ButtonProps, ref) => {
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

Button.displayName = "Button";
export default Button;
