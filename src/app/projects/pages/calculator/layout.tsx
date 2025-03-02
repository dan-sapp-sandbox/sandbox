import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculator",
  description: "It's a calculator",
};
export default function PokemonLayout(
  { children }: { children: JSX.Element },
) {
  return children;
}
