import Sections from "./sections";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="min-h-screen w-full flex flex-col gap-4 md:gap-6 overflow-y-scroll scrollbar-hide"
    >
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
