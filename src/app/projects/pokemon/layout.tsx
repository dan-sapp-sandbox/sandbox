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
    <main style={{ height: "calc(100vh - 70px)" }}>
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </main>
  );
}
