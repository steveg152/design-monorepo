import { forwardRef } from "react";
import { cn } from "../../lib/utils";
import { buttonVariants } from "../../variants/buttonVariants";
import { VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  steve?: SteveType;
}

/**
 * Type representing the allowed values for the `steve` prop.
 * @type {"steve" | "greco"}
 */
type SteveType = "steve" | "greco";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, children, steve, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        id={steve}
        {...rest}
        className={cn(buttonVariants({ variant, size }), rest.className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
