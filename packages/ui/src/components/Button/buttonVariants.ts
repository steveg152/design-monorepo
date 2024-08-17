import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "dark:bg-primary dark:text-primary dark:hover:bg-primary/90",
        destructive: "bg-destructive text-destructive hover:bg-destructive/90",
        info: "bg-info text-info hover:bg-info/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent",
        default:
          "dark:bg-slate-800 dark:text-slate-200 hover:dark:bg-slate-800/80 bg-transparent/15 text-slate-900 hover:bg-transparent/20",
        ghost: "hover:bg-accent hover:text-accent text-white",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export default buttonVariants;
