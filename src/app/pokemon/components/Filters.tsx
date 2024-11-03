import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { pokemonMap, typeColorMap } from "./utils";

interface FiltersProps {
  filterTypes: string[];
  updateFilterTypes: (newFilters: string[]) => void;
}
export default function Filters(
  { filterTypes, updateFilterTypes }: FiltersProps,
): ReactNode {
  function clickHandler(type: string): void {
    if (filterTypes.includes(type)) {
      updateFilterTypes(filterTypes.filter((filter) => filter !== type));
    } else {
      updateFilterTypes([...filterTypes, type]);
    }
  }
  return (
    <div className="my-4 grid grid-flow-row grid-cols-2">
      <div className="col-span-2 md:col-span-1 gap-1 grid grid-flow-row grid-cols-9">
        {Object.keys(typeColorMap).map((type, index) => {
          if (index > 8) return undefined;
          const colors = typeColorMap[type];
          const isSelected = filterTypes.includes(type);
          const selectionExists = filterTypes.length;
          const Icon = pokemonMap[type].icon;
          return (
            <Button
              key={type}
              onClick={() => clickHandler(type)}
              className={`col-span-1 flex ${colors} ${
                isSelected && "border-black border-4"
              } ${!isSelected && selectionExists && "opacity-50"}`}
            >
              <Icon />
            </Button>
          );
        })}
      </div>
      <div className="col-span-2 md:col-span-1 gap-1 grid grid-flow-row grid-cols-9">
        {Object.keys(typeColorMap).map((type, index) => {
          if (index < 9) return undefined;
          const colors = typeColorMap[type];
          const isSelected = filterTypes.includes(type);
          const selectionExists = filterTypes.length;
          const Icon = pokemonMap[type].icon;
          return (
            <Button
              key={type}
              onClick={() => clickHandler(type)}
              className={`col-span-1 flex ${colors} ${
                isSelected && "border-black border-4"
              } ${!isSelected && selectionExists && "opacity-50"}`}
            >
              <Icon />
            </Button>
          );
        })}
      </div>
    </div>
  );
}
