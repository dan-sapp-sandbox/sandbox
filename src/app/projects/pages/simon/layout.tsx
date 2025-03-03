import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simon",
  description: "Simon",
};
export default function SimonLayout(
  { children }: { children: JSX.Element },
) {
  return children;
}
