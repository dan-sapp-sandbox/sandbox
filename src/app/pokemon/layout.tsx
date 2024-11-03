import type { Metadata } from "next";
import { ReactNode } from "react";
import ReactQueryProvider from "./components/QueryProvider";

export const metadata: Metadata = {
  title: "Pokemon Team Builder",
  description: "Software Engineering Portfolio",
};
export default function PokemonLayout(
  { children }: { children: ReactNode },
) {
  return (
    <main className="xs:pt-4 md:pt-6 xs:px-8 xl:px-20 bg-purple-950">
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </main>
  );
}
