import Sections from "./sections";

const App = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 md:gap-6 overflow-y-scroll scrollbar-hide bg-linear-to-br from-slate-900 via-blue-950 to-black">
      <div className="w-full p-4 md:p-8 flex flex-row justify-center">
        <div className="w-full max-w-400 flex flex-col justify-center items-center gap-4 md:gap-8 overflow-hidden">
          <Sections.Profile />
          <Sections.Map />
          <Sections.UserMgmt />
          <Sections.Dnd />
          <Sections.Charts />
          <Sections.ComponentLibrary />
        </div>
      </div>
    </div>
  );
};

export default App;
