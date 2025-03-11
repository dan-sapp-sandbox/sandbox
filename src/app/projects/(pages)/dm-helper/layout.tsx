import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DM's Little Helper",
  description: "DM's Little Helper",
};
export default function DmHelperLayout(
  { children }: { children: JSX.Element },
) {
  return children;
}
