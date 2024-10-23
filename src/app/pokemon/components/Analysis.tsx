import { ReactNode } from "react";
import { iPokemon } from "../api/types";
import { Radar } from "@/components/ui/radar";
import { typeColorMap } from "./Filters";

const weaknessesMap: Record<string, string[]> = {
  normal: ["fighting"],
  fighting: ["flying", "psychic", "fairy"],
  flying: ["rock", "electric", "ice"],
  poison: ["ground", "psychic"],
  ground: ["water", "grass", "ice"],
  rock: ["fighting", "ground", "steel", "water", "grass"],
  bug: ["flying", "rock", "fire"],
  ghost: ["ghost", "dark"],
  steel: ["fighting", "ground", "fire"],
  fire: ["ground", "rock", "water"],
  water: ["grass", "electric"],
  grass: ["flying", "poison", "bug", "fire", "ice"],
  electric: ["ground"],
  psychic: ["bug", "ghost", "dark"],
  ice: ["fighting", "rock", "steel", "fire"],
  dragon: ["ice", "dragon", "fairy"],
  dark: ["fighting", "bug", "fairy"],
  fairy: ["poison", "steel"],
};

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

interface Props {
  team: iPokemon[];
}
export default function Analysis(
  { team }: Props,
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
    const typeWeaknesses = weaknessesMap[type];
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

  const coverageGaps = Object.keys(weaknessesMap).filter((type) => {
    const typeWeaknesses = weaknessesMap[type];
    return !typeWeaknesses.some((weakness) => teamTypes.includes(weakness));
  });
  const teamScaling = 150 * team.length || 9999;
  return (
    <div className="gap-2 grid grid-flow-row grid-cols-12">
      <div className="m-auto col-span-12 md:col-span-6 items-center justify-center">
        <Radar
          data={teamStats}
          width={325}
          height={220}
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
      <div className="col-span-12 md:col-span-6 md:pl-8">
        <div className="flex flex-wrap my-3 grid-cols-12">
          <div className="flex xs:text-xs xl:text-xl mt-2 font-bold col-span-12">
            Pokemon Team Types:
          </div>
          <div className="flex mt-2 font-bold col-span-12">
            {teamTypes.map((type, index) => (
              <div
                key={index}
                className={`col-span-1 xs:text-xs xl:text-xl px-2 py-1 rounded-3xl m-1 capitalize font-semibold ${
                  typeColorMap[type]
                }`}
              >
                {type}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap my-3">
          <div className="flex xs:text-xs mt-2 xl:text-xl font-bold text-center justify-center">
            Common Vulnerablilities:
          </div>
          {Array.from(weaknessMap.entries()).map((type, index) => (
            <div
              key={index}
              className={`xs:text-xs xl:text-xl px-2 py-1 rounded-3xl font-semibold m-1 capitalize ${
                typeColorMap[type[0]]
              }`}
            >
              {type[0]}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap my-1 grid-cols-12">
          <div className="flex xs:text-[8px] xl:text-xl mt-2 font-bold col-span-12">
            Offensive Coverage Gaps:
          </div>
          {coverageGaps.map((type, index) => (
            <div
              key={index}
              className={`xs:text-xs xl:text-xl px-2 py-1 rounded-3xl m-1 capitalize font-semibold ${
                typeColorMap[type]
              }`}
            >
              {type}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
