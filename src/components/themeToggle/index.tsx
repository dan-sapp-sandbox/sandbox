import { useTheme } from "@/components/themeToggle/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="fixed top-5 right-10 
        flex items-center gap-2
        rounded-md border
        border-[var(--border)]
        px-4 py-2 text-sm font-medium
        bg-[var(--foreground)] text-[var(--background)]
        dark:bg-[var(--foreground)] dark:text-[var(--background)]
        shadow-sm
        transition-colors duration-300
        hover:bg-[var(--primary)] hover:text-[var(--primary-foreground)]
        dark:hover:bg-[var(--primary)] dark:hover:text-[var(--primary-foreground)]"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
