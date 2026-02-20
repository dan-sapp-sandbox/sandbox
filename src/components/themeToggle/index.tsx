import { useTheme } from "@/components/themeToggle/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="z-999 fixed top-2 md:top-5 right-2 md:right-10 
        flex items-center gap-2
        rounded-lg md:rounded-xl border cursor-pointer
        border-(--theme-toggle-border)
        px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium
        bg-(--background) hover:bg-(--foreground) text-(--card-foreground)
        shadow-sm transition-colors duration-300"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </div>
  );
}
