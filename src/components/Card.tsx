import type { JSX } from "react";

const Card = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div
      className="w-full max-w-400 min-h-100 flex flex-row justify-between rounded-xl gap-16 p-4 border
          bg-[var(--card-background)] border-[var(--card-border)]
          text-[var(--card-foreground)] shadow-md transition-colors duration-300"
    >
      {children}
    </div>
  );
};

export default Card;
