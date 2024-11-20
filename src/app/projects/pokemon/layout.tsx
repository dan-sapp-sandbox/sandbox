import type { Metadata } from "next";
import ReactQueryProvider from "./components/QueryProvider";

export const metadata: Metadata = {
  title: "Pokemon Team Builder",
  description: "Software Engineering Portfolio",
};
export default function PokemonLayout(
  { children }: { children: JSX.Element },
) {
  return (
    <main
      style={{
        height: "calc(100vh - 70px)",
        overflowY: "scroll",
        scrollbarWidth: "none",
      }}
      className="pb-16 md:pb-0"
    >
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </main>
  );
}
