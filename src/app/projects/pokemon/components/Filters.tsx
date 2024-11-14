"use client";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { pokemonMap, typeColorMap } from "./utils";
import { useRouter, useSearchParams } from "next/navigation";

interface iProps {
  filterTypes: string[];
  updateFilterTypes: (filterTypes: string[]) => void;
}

export default function Filters(
  { filterTypes, updateFilterTypes }: iProps,
): ReactNode {
  const router = useRouter();
  const searchParams = useSearchParams();
  function clickHandler(type: string): void {
    let updatedFilters: string[];

    if (filterTypes.includes(type)) {
      updatedFilters = filterTypes.filter((filter) => filter !== type);
    } else {
      updatedFilters = [...filterTypes, type];
    }

    updateFilterTypes(updatedFilters);

    const params = new URLSearchParams(searchParams.toString());

    if (updatedFilters.length > 0) {
      params.set("filters", updatedFilters.join(","));
    } else {
      params.delete("filters"); // Remove the query param if the array is empty
    }

    router.push(`?${params.toString()}`);
  }

  return (
    <div className="my-4 md:my-6 mx-1 py-1 sticky top-14 sm:top-20 md:top-28 lg:top-40 xl:top-40 2xl:top-52 bg-sky-800">
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
                className={`col-span-1 p-0 flex ${colors} ${
                  !isSelected && selectionExists && "opacity-50"
                }`}
              >
                <Icon />
              </Button>
            );
          })}
        </div>
        <div className="col-span-2 mt-1 md:mt-0 md:ml-1 md:col-span-1 gap-1 grid grid-flow-row grid-cols-9">
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
                className={`col-span-1 p-0 flex ${colors} ${
                  !isSelected && selectionExists && "opacity-50"
                }`}
              >
                <Icon />
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
