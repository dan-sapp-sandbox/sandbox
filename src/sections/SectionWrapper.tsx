import type { JSX } from "react";

export const SectionWrapper = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="max-w-475 w-full flex flex-row justify-between bg-zinc-800/80 rounded-xl p-16">{children}</div>
  );
};
