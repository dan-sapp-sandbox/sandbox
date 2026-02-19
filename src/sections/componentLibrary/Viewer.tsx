import ComponentRow from "./ComponentRow";
import useComponentLibraryState from "./useComponentLibraryState";

const Viewer = () => {
  const { componentList, displayComponent, selected, setSelected } = useComponentLibraryState();
  return (
    <div className="h-150 w-225 flex flex-row justify-center items-center bg-(--background-alt) text-(--card-foreground)">
      <div className="h-full w-50 flex flex-col gap-1 border-r">
        <span className="text-lg font-bold">Components</span>
        <div className="overflow-y-scroll scrollbar-hide">
          <div className="flex flex-col gap-1">
            {componentList.map((component, index) => (
              <ComponentRow
                key={component}
                name={component}
                onClick={setSelected}
                selected={selected}
                isLast={componentList.length - 1 === index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="h-full flex-1 flex flex-row justify-center items-center text-(--card-foreground)">
        {displayComponent}
      </div>
    </div>
  );
};

export default Viewer;
