import ThemeToggle from "./ThemeToggle";
import ProfileSection from "./sections/ProfileSection";
import MapSection from "./sections/map/MapSection";
import StorybookSection from "./sections/StorybookSection";
import UserMgmtSection from "./sections/UserMgmtSection";
import DndSection from "./sections/DndSection";
import ChartsSection from "./sections/ChartsSection";

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
      <div className="w-full flex flex-col justify-center items-center gap-12 my-16">
        <ProfileSection />
        <div className="h-1 max-w-475 w-full bg-zinc-500/60" />
        <MapSection />
        <div className="h-1 max-w-475 w-full bg-zinc-500/60" />
        <UserMgmtSection />
        <div className="h-1 max-w-475 w-full bg-zinc-500/60" />
        <DndSection />
        <div className="h-1 max-w-475 w-full bg-zinc-500/60" />
        <ChartsSection />
        <div className="h-1 max-w-475 w-full bg-zinc-500/60" />
        <StorybookSection />
      </div>
    </div>
  );
};

export default App;
