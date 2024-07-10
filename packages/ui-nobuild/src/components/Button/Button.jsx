import React from "react";

/**
 * @typedef {Object} ButtonProps
 * @property {React.ReactNode} [children]
 * @property {string} [className]
 * @property {'primary' | 'seconday'} [variant] - Button variant
 * @property {'sm' | 'md'} [size] - Button variant
 */

/**
 *
 * @component
 * @param {ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>} props - React props
 * @returns {JSX.Element}
 *
 * @link https://react-tailwindcss.com/components/button
 *
 * @example
 * <Button variant="primary">Primary</Button>
 * <Button variant="secondary">Secondary</Button>
 */

export const Button = ({
  children,
  variant = "primary",
  size = "sm",
  ...rest
}) => {
  return (
    <button className={`${variant}`} {...rest}>
      {children}
    </button>
  );
};
