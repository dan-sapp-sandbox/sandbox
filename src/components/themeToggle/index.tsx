import { useTheme } from "@/components/themeToggle/useTheme";
import { cn } from "@/lib/utils";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn("flex items-center gap-6 rounded-2xl", "px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm")}>
      <Sun
        onClick={() => theme === "dark" && setTheme("light")}
        className={`size-6 ${theme === "light" ? "fill-amber-300" : "fill-zinc-300/50 cursor-pointer"}`}
      />
      <Moon
        onClick={() => theme === "light" && setTheme("dark")}
        className={`size-6 ${theme === "light" ? "fill-zinc-300/50 cursor-pointer" : "fill-amber-300"}`}
      />
    </div>
  );
};

export default ThemeToggle;
