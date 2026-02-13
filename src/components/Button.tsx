import type { JSX } from "react";
import clsx from "clsx";

type ButtonProps = {
  className?: string;
  children: string | JSX.Element;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
};

const baseStyles =
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  primary: "bg-zinc-800 text-white hover:bg-red-300 focus:ring-zinc-500",
  secondary: "bg-zinc-200 text-zinc-900 hover:bg-zinc-300 focus:ring-zinc-400",
  ghost: "bg-transparent text-zinc-900 hover:bg-zinc-100 focus:ring-zinc-300",
};

const Button = ({ className, children, onClick, variant = "primary", disabled = false }: ButtonProps) => {
  return (
    <button className={clsx(baseStyles, variants[variant], className)} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
