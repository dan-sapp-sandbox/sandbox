import { useTheme } from "@/components/themeToggle/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="z-999 fixed top-5 right-10 
        flex items-center gap-2
        rounded-xl border cursor-pointer
        border-[var(--theme-toggle-border)]
        px-4 py-2 text-sm font-medium
        bg-[var(--background)] text-[var(--foreground)]
        dark:bg-[var(--background)] dark:text-[var(--foreground)]
        shadow-sm p-1 
        transition-colors duration-300
        hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]
        dark:hover:bg-[var(--primary)] dark:hover:text-[var(--primary-foreground)]"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </div>
  );
}
