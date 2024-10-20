import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

const typeColorMap: { [key: string]: string } = {
  normal: "bg-neutral-300 font-black text-black hover:bg-neutral-200",
  fighting: "bg-red-300 font-black text-black hover:bg-red-200",
  flying: "bg-blue-300 font-black text-black hover:bg-slate-200",
  poison: "bg-violet-500 font-black hover:bg-violet-400",
  ground: "bg-amber-800 font-black hover:bg-amber-700",
  rock: "bg-orange-500 font-black hover:bg-orange-400",
  bug: "bg-lime-400 font-black text-black hover:bg-lime-300",
  ghost: "bg-indigo-500 font-black hover:bg-indigo-400",
  steel: "bg-zinc-500 font-black hover:bg-zinc-400",
  fire: "bg-red-600 font-black hover:bg-red-400",
  water: "bg-blue-600 font-black hover:bg-blue-500",
  grass: "bg-green-500 font-black hover:bg-green-400",
  electric: "bg-yellow-500 font-black hover:bg-yellow-400",
  psychic: "bg-purple-600 font-black hover:bg-purple-500",
  ice: "bg-cyan-300 font-black text-black hover:bg-cyan-200",
  dragon: "bg-red-300 font-black text-black hover:bg-red-200",
  dark: "bg-gray-700 font-black hover:bg-gray-600",
  fairy: "bg-pink-400 font-black hover:bg-pink-300",
};
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
    <>
      {Object.keys(typeColorMap).map((type) => {
        const colors = typeColorMap[type];
        const isSelected = filterTypes.includes(type);
        const selectionExists = filterTypes.length;
        return (
          <Button
            key={type}
            onClick={() => clickHandler(type)}
            className={`capitalize col-span-2 flex text-2xl ${colors} ${
              isSelected && "border-black border-4"
            } ${!isSelected && selectionExists && "opacity-50"}`}
          >
            {type}
          </Button>
        );
      })}
    </>
  );
}
