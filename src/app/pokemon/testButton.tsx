"use client";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";
import { getList } from "../../api/pokemon";

interface Props {
  children: string;
}
export default function TestButton({ children }: Props): ReactNode {
  return (
    <Button onClick={() => getList()}>
      {children}
    </Button>
  );
}
