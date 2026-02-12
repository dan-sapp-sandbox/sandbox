import type { JSX } from "react";

const Button = ({
  className,
  children,
  onClick,
}: {
  className: string;
  children: string | JSX.Element;
  onClick: () => void;
}) => {
  return (
    <button className={`${className} bg-zinc-600 hover:bg-zinc-400`} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
