import Header from "./Header";
import Sections from "./sections";

// TODO: chatbot

const App = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <Header />
      <div className="w-full flex-1 overflow-y-scroll scrollbar-hide bg-(--background)">
        <Sections.Profile />
        <Sections.Map />
        <Sections.ReportBuilder />
        <Sections.UserMgmt />
        <Sections.Charts />
        <Sections.ComponentLibrary />
      </div>
    </div>
  );
};

export default App;
