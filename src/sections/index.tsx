import ChartsSection from "./charts/ChartsSection";
import ComponentLibrarySection from "./componentLibrary/ComponentLibrarySection";
import ReportBuilderSection from "./reportBuilder/ReportBuilderSection";
import MapSection from "./map/MapSection";
import ProfileSection from "./profile/ProfileSection";
import UserMgmtSection from "./userMgmt/UserMgmtSection";

const Sections = {
  Profile: () => <ProfileSection />,
  Map: () => <MapSection />,
  UserMgmt: () => <UserMgmtSection />,
  ReportBuilder: () => <ReportBuilderSection />,
  Charts: () => <ChartsSection />,
  ComponentLibrary: () => <ComponentLibrarySection />,
};

export default Sections;
