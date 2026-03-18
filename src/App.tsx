import Header from "./Header";
import ProfileSection from "./sections/profile/ProfileSection";
import MapSection from "./sections/map/MapSection";
import ChartsSection from "./sections/charts/ChartsSection";
import UserMgmtSection from "./sections/userMgmt/UserMgmtSection";
import ReportBuilderSection from "./sections/reportBuilder/ReportBuilderSection";
import ComponentLibrarySection from "./sections/componentLibrary/ComponentLibrarySection";
import { useTheme } from "@/components/themeToggle/useTheme";
// TODO: chatbot

const App = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="h-screen w-full flex flex-col">
      <Header theme={theme} setTheme={setTheme} />
      <div className="w-full flex-1 overflow-y-scroll scrollbar-hide bg-(--background)">
        <ProfileSection />
        <MapSection />
        <ReportBuilderSection />
        <ChartsSection theme={theme} />
        <UserMgmtSection />
        <ComponentLibrarySection />
      </div>
    </div>
  );
};

export default App;
