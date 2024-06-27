import clsx from "clsx";
import { ComponentProps } from "react";

type InputProps = ComponentProps<"input"> & {
  label?: string;
  unlabeled?: boolean;
  placeholder?: string;
};

const Input = ({ label, unlabeled, placeholder, ...props }: InputProps) => {
  return (
    <label className="flex flex-col gap-1.5">
      <span
        className={clsx(
          "inline-flex py-1 font-semibold",
          unlabeled && "sr-only",
        )}
      >
        {label}
      </span>
      <input
        className="block w-full gap-2 rounded-md bg-transparent 
        bg-white px-3 py-1 text-sm placeholder-slate-400 shadow-sm ring-1 ring-inset 
        ring-slate-500 focus:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-600 
        disabled:cursor-not-allowed disabled:bg-slate-200  dark:bg-slate-800 dark:placeholder-slate-400"
        type="text"
        placeholder={unlabeled ? label : placeholder}
        {...props}
      />
    </label>
  );
};

export default Input;
