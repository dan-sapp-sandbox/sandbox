import ProfileSection from "@/sections/profile/ProfileSection";
import MapSection from "@/sections/map/MapSection";
import StorybookSection from "@/sections/StorybookSection";
import UserMgmtSection from "@/sections/UserMgmtSection";
import DndSection from "@/sections/DndSection";
import ChartsSection from "@/sections/ChartsSection";

import ThemeToggle from "@/components/themeToggle";
import Divider from "@/components/Divider";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-background text-foreground dark:bg-background dark:text-foreground h-screen w-screen flex flex-col gap-6 overflow-y-scroll"
    >
      <ThemeToggle />
      <div className="w-full my-16 flex flex-row justify-center">
        <div className="w-full max-w-475 flex flex-col justify-center items-center gap-12">
          <ProfileSection />
          <Divider />
          <MapSection />
          <Divider />
          <UserMgmtSection />
          <Divider />
          <DndSection />
          <Divider />
          <ChartsSection />
          <Divider />
          <StorybookSection />
        </div>
      </div>
    </div>
  );
};

export default App;
