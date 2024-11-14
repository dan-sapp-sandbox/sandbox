import type { Metadata } from "next";
import { ReactNode, Suspense } from "react";
import ReactQueryProvider from "./components/QueryProvider";

export const metadata: Metadata = {
  title: "Pokemon Team Builder",
  description: "Software Engineering Portfolio",
};
export default function PokemonLayout(
  { children }: { children: ReactNode },
) {
  return (
    <main>
      <Suspense>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </Suspense>
    </main>
  );
}
