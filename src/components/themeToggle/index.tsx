import { useTheme } from "@/components/themeToggle/useTheme";
import { cn } from "@/lib/utils";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn("flex items-center gap-6 rounded-2xl", "px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm")}>
      <Sun
        onClick={() => theme === "dark" && setTheme("light")}
        className={`size-6 ${theme === "light" ? "stroke-amber-400 fill-amber-300" : "stroke-zinc-400 fill-zinc-400/50 cursor-pointer"}`}
      />
      <Moon
        onClick={() => theme === "light" && setTheme("dark")}
        className={`size-6 ${theme === "light" ? "stroke-zinc-300 fill-zinc-200/50 cursor-pointer" : "fill-amber-400"}`}
      />
    </div>
  );
};

export default ThemeToggle;
