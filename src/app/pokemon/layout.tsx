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
    <main className="container xs:my-4 md:my-12 xs:px-8 xl:px-40">
      <ReactQueryProvider>
        {children}
      </ReactQueryProvider>
    </main>
  );
}
