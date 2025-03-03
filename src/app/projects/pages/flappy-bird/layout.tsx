import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flappy Bird",
  description: "Flappy Bird",
};
export default function FlappyBirdLayout(
  { children }: { children: JSX.Element },
) {
  return children;
}
