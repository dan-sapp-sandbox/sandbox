import { useTheme } from "@/components/themeToggle/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="z-999 fixed top-5 right-10 
        flex items-center gap-2
        rounded-xl border cursor-pointer
        border-(--theme-toggle-border)
        px-4 py-2 text-sm font-medium
        bg-(--background)] text-(--foreground)
        dark:bg-(--background) dark:text-(--foreground)
        shadow-sm p-1 transition-colors duration-300
        hover:bg-(--primary) hover:text-(--primary-foreground)
        dark:hover:bg-(--primary) dark:hover:text-(--primary-foreground)"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </div>
  );
}
