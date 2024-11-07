"use client";
import { ReactNode } from "react";
import { iPokemon } from "../api/types";
import { Radar } from "@/components/ui/radar";
import { pokemonMap, typeColorMap } from "./utils";

export type Variable =
  | "hp"
  | "attack"
  | "defense"
  | "specialAttack"
  | "specialDefense"
  | "speed";

type DataItem<T extends string> =
  & {
    [key in T]: number;
  }
  & {
    name: string;
  };
export type Data = DataItem<Variable>;

interface iProps {
  team: iPokemon[] | [];
}
export default function Analysis(
  { team }: iProps,
): ReactNode {
  const teamStats = team.reduce((acc, pokemon) => {
    const scaling = 20;
    return {
      hp: acc.hp + pokemon.hp - scaling,
      attack: acc.attack + pokemon.attack - scaling,
      defense: acc.defense + pokemon.defense - scaling,
      specialAttack: acc.specialAttack + pokemon.specialAttack - scaling,
      specialDefense: acc.specialDefense + pokemon.specialDefense - scaling,
      speed: acc.speed + pokemon.speed - scaling,
    };
  }, {
    hp: 0,
    attack: 0,
    defense: 0,
    specialAttack: 0,
    specialDefense: 0,
    speed: 0,
  });
  const teamTypes = team.reduce((acc, pokemon) => {
    let newAcc = acc;
    const type1 = pokemon?.types[0];
    const type2 = pokemon?.types[1];
    if (!newAcc.includes(type1)) {
      newAcc = [...newAcc, type1];
    }
    if (type2 && !newAcc.includes(type2)) {
      newAcc = [...newAcc, type2];
    }
    return newAcc;
  }, [] as string[]);

  let weaknessMap = new Map<string, number>();
  teamTypes.forEach((type) => {
    const typeWeaknesses = pokemonMap[type].weaknesses;
    typeWeaknesses.forEach((weakness) => {
      if (weaknessMap.has(weakness)) {
        weaknessMap.set(weakness, (weaknessMap.get(weakness) || 0) + 1);
      } else {
        weaknessMap.set(weakness, 1);
      }
    });
  });

  weaknessMap = new Map(
    Array.from(weaknessMap).filter((x) => x[1] > 1).sort((a, b) => b[1] - a[1]),
  );

  const coverageGaps = Object.keys(pokemonMap).filter((type) =>
    !teamTypes.some((x) => x === type)
  );

  const teamScaling = 150 * team.length || 9999;
  return (
    <div className="mt-4 mx-1 gap-2 grid grid-flow-row grid-cols-12">
      <div className="m-auto col-span-12 md:col-span-5 lg:col-span-3 items-center justify-center">
        <Radar
          data={teamStats}
          width={320}
          height={150}
          axisConfig={[
            { title: "Hp", name: "hp", max: teamScaling },
            { title: "Attack", name: "attack", max: teamScaling },
            { title: "Defense", name: "defense", max: teamScaling },
            { title: "Speed", name: "speed", max: teamScaling },
            {
              title: "Special-Attack",
              name: "specialAttack",
              max: teamScaling,
            },
            {
              title: "Special-Defense",
              name: "specialDefense",
              max: teamScaling,
            },
          ]}
        />
      </div>
      <div className="col-span-12 md:col-span-7 lg:col-span-9 md:pl-8">
        <div className="flex flex-wrap my-3 grid-cols-12 items-center gap-1">
          <div className="flex xs:text-xs xl:text-xl font-bold col-span-12 text-zinc-200">
            Pokemon Team Types:
          </div>
          {teamTypes.map((type, index) => {
            const Icon = pokemonMap[type].icon;
            return (
              <div
                key={index}
                className={`col-span-1 p-1 rounded-lg ${typeColorMap[type]}`}
              >
                <Icon />
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap my-3 items-center gap-1">
          <div className="flex xs:text-xs xl:text-xl font-bold text-center justify-center text-zinc-200">
            Common Vulnerablilities:
          </div>
          {Array.from(weaknessMap.entries()).map((type, index) => {
            const Icon = pokemonMap[type[0]].icon;
            return (
              <div
                key={index}
                className={`p-1 rounded-lg ${typeColorMap[type[0]]}`}
              >
                <Icon />
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap my-1 grid-cols-12 items-center gap-1">
          <div className="flex xs:text-[8px] xl:text-xl font-bold col-span-12 text-zinc-200">
            Offensive Coverage Gaps:
          </div>
          {coverageGaps.map((type, index) => {
            const Icon = pokemonMap[type].icon;
            if (!team.length) return;
            return (
              <div
                key={index}
                className={`p-1 rounded-lg ${typeColorMap[type]}`}
              >
                <Icon />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
