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
    <main className="h-[calc(100vh-73px)] md:h-[calc(100vh-64px)] overflow-y-scroll scrollbar-hide">
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </main>
  );
}
