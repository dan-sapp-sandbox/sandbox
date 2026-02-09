import type { JSX } from "react";

export const Card = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div
      className="min-w-450 max-w-450 w-full flex flex-row justify-between rounded-xl p-16 border
          bg-[var(--card-background)] border-[var(--card-border)]
          text-[var(--card-foreground)] shadow-md transition-colors duration-300"
    >
      {children}
    </div>
  );
};
