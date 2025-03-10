"use client";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PageList from "./PageList";
import { useRouter } from "next/navigation";

export default function SimpleBottomNavigation() {
  const router = useRouter();
  return (
    <div className="fixed md:hidden bottom-0 left-0 right-0 z-10">
      <BottomNavigation
        sx={{ background: "#1e3a8a", height: "4.5rem" }}
        showLabels
        onChange={(_, newValue) => {
          router.replace(PageList[newValue].url);
        }}
      >
        {PageList.map((page) => (
          <BottomNavigationAction
            key={page.title}
            sx={{
              background: "#1e3a8a",
              color: "#e4e4e7",
              padding: 0,
              minWidth: "70px",
            }}
            label={page.title}
            icon={page.image}
          />
        ))}
      </BottomNavigation>
    </div>
  );
}
