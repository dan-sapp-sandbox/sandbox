import { useTheme } from "@/components/themeToggle/useTheme";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={cn(
        "z-999 fixed top-2 md:top-5 right-2 md:right-10",
        "flex items-center gap-2 border-(--theme-toggle-border)",
        "rounded-lg md:rounded-xl border cursor-pointer",
        "px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium",
        "bg-(--background) hover:bg-(--foreground) text-(--card-foreground)",
        "shadow-sm transition-colors duration-300",
      )}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </div>
  );
};

export default ThemeToggle;
