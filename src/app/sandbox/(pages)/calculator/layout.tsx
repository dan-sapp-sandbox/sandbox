import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculator",
  description: "It's a calculator",
};
export default function CalculatorLayout(
  { children }: { children: JSX.Element },
) {
  return children;
}
