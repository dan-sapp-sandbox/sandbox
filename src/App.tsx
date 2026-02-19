import ProfileSection from "@/sections/profile/ProfileSection";
import MapSection from "@/sections/map/MapSection";
import StorybookSection from "@/sections/componentLibrary/ComponentLibrarySection";
import UserMgmtSection from "@/sections/userMgmt/UserMgmtSection";
import DndSection from "@/sections/dnd/DndSection";
import ChartsSection from "@/sections/charts/ChartsSection";

import ThemeToggle from "@/components/themeToggle";
import { Separator } from "@/components/ui/separator";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: "url(./background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-screen w-screen flex flex-col gap-6 overflow-y-scroll"
    >
      <ThemeToggle />
      <div className="w-full p-8 flex flex-row justify-center">
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <ProfileSection />
          <Separator />
          <MapSection />
          <Separator />
          <UserMgmtSection />
          <Separator />
          <DndSection />
          <Separator />
          <ChartsSection />
          <Separator />
          <StorybookSection />
        </div>
      </div>
    </div>
  );
};

export default App;
