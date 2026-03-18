import Header from "./Header";
import Sections from "./sections";
import { useTheme } from "@/components/themeToggle/useTheme";
// TODO: chatbot

const App = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="h-screen w-full flex flex-col">
      <Header theme={theme} setTheme={setTheme} />
      <div className="w-full flex-1 overflow-y-scroll scrollbar-hide bg-(--background)">
        <Sections.Profile />
        <Sections.Map />
        <Sections.ReportBuilder />
        <Sections.UserMgmt />
        <Sections.Charts key={theme} />
        <Sections.ComponentLibrary />
      </div>
    </div>
  );
};

export default App;
