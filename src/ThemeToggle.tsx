import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="fixed top-5 right-10 rounded-md border px-3 py-2 text-sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
