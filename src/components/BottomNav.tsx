"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { pages } from "./AppBar";
import { useRouter } from "next/navigation";

export default function SimpleBottomNavigation() {
  const router = useRouter();
  return (
    <Box className="fixed md:hidden bottom-0 left-0 right-0">
      <BottomNavigation
        className="bg-blue-900"
        showLabels
        onChange={(_, newValue) => {
          router.replace(pages[newValue].url);
        }}
      >
        {pages.map((page) => (
          <BottomNavigationAction
            key={page.title}
            className="text-zinc-200 bg-blue-900"
            label={page.title}
            icon={page.image}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
