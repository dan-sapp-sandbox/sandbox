import Sections from "./sections";

const App = () => {
  return (
    <div
      style={{
        // backgroundImage: "url(/background.jpg)",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // background: `linear-gradient(
        //   135deg,
        //   #0f172a 0%,
        //   #0b1f3a 40%,
        //   #020617 100%
        // )`,
        background: `radial-gradient(
            circle at 20% 20%,
            #1e3a8a22,
            transparent 40%
          ),
          radial-gradient(
            circle at 80% 80%,
            #2563eb22,
            transparent 40%
          ),
          #020617`,
      }}
      className="h-full w-full flex flex-col gap-4 md:gap-6 overflow-y-scroll scrollbar-hide"
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
