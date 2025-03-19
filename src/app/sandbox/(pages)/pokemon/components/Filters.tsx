import { pokemonMap, typeColorMap } from "./utils";

interface iProps {
  filterTypes: string[];
  updateFilterTypes: (filterTypes: string[]) => void;
}

export default function Filters(
  { filterTypes, updateFilterTypes }: iProps,
): JSX.Element {
  function clickHandler(type: string): void {
    let updatedFilters: string[];

    if (filterTypes.includes(type)) {
      updatedFilters = filterTypes.filter((filter) => filter !== type);
    } else {
      updatedFilters = [...filterTypes, type];
    }

    updateFilterTypes(updatedFilters);
  }

  return (
    <div className="my-2 md:my-3 mx-1 py-1 top-16 sm:top-20 md:top-28 lg:top-40 xl:top-40 2xl:top-52 bg-sky-800">
      <div className="my-3 grid grid-flow-row grid-cols-2">
        <div className="col-span-2 xl:col-span-1 gap-1 grid grid-flow-row grid-cols-9">
          {Object.keys(typeColorMap).map((type, index) => {
            if (index > 8) return undefined;
            const colors = typeColorMap[type];
            const isSelected = filterTypes.includes(type);
            const selectionExists = filterTypes.length;
            const Icon = pokemonMap[type].icon;
            return (
              <button
                key={type}
                onClick={() => clickHandler(type)}
                className={`col-span-1 min-w-px justify-center rounded px-0 py-1 flex ${colors} ${
                  !isSelected && selectionExists && "opacity-50"
                }`}
              >
                <Icon />
              </button>
            );
          })}
        </div>
        <div className="col-span-2 mt-1 xl:mt-0 xl:ml-1 xl:col-span-1 gap-1 grid grid-flow-row grid-cols-9">
          {Object.keys(typeColorMap).map((type, index) => {
            if (index < 9) return undefined;
            const colors = typeColorMap[type];
            const isSelected = filterTypes.includes(type);
            const selectionExists = filterTypes.length;
            const Icon = pokemonMap[type].icon;
            return (
              <button
                key={type}
                onClick={() => clickHandler(type)}
                className={`col-span-1 min-w-px justify-center rounded px-0 py-1 flex ${colors} ${
                  !isSelected && selectionExists && "opacity-50"
                }`}
              >
                <Icon />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
