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
    <main className="container my-6">
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </main>
  );
}
