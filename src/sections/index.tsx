import ChartsSection from "./charts/ChartsSection";
import ComponentLibrarySection from "./componentLibrary/ComponentLibrarySection";
import DndSection from "./dnd/DndSection";
import MapSection from "./map/MapSection";
import ProfileSection from "./profile/ProfileSection";
import UserMgmtSection from "./userMgmt/UserMgmtSection";

const Sections = {
  Profile: () => <ProfileSection />,
  Map: () => <MapSection />,
  UserMgmt: () => <UserMgmtSection />,
  Dnd: () => <DndSection />,
  Charts: () => <ChartsSection />,
  ComponentLibrary: () => <ComponentLibrarySection />,
};

export default Sections;
