import { ReactNode } from "react";
import { Details } from "../api/types";
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
  team: Details[];
}
export default function Analysis(
  { team }: Props,
): ReactNode {
  const teamStats = team.reduce((acc, pokemon) => {
    const scaling = 20;
    return {
      hp: acc.hp + pokemon.stats[0].base_stat - scaling,
      attack: acc.attack + pokemon.stats[1].base_stat - scaling,
      defense: acc.defense + pokemon.stats[2].base_stat - scaling,
      specialAttack: acc.specialAttack + pokemon.stats[3].base_stat - scaling,
      specialDefense: acc.specialDefense + pokemon.stats[4].base_stat - scaling,
      speed: acc.speed + pokemon.stats[5].base_stat - scaling,
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
    const type1 = pokemon.types[0].type.name;
    const type2 = pokemon.types[1]?.type.name;
    if (!newAcc.includes(type1)) {
      newAcc = [...newAcc, type1];
    }
    if (type2 && !newAcc.includes(type2)) {
      newAcc = [...newAcc, type2];
    }
    return newAcc;
  }, [] as string[]);
  // TODO: instead of guessing, just calculate the average and minimum stats, probably a reduce

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
    <div className="gap-2 grid grid-flow-row-dense grid-cols-12">
      <div className="p-5 col-span-4 items-center justify-center">
        <Radar
          data={teamStats}
          width={500}
          height={400}
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
      <div className="col-span-8 mt-12 pl-8 ">
        <div className="flex flex-wrap my-3">
          <div className="flex text-xl mt-4 font-bold">
            Pokemon Team Types:
          </div>
          {teamTypes.map((type, index) => (
            <div
              key={index}
              className={`flex px-5 py-3 rounded-3xl m-1 capitalize ${
                typeColorMap[type]
              }`}
            >
              {type}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap my-3">
          <div className="flex text-xl mt-4 font-bold">
            Common Vulnerablilities:
          </div>
          {Array.from(weaknessMap.entries()).map((type, index) => (
            <div
              key={index}
              className={`flex px-5 py-3 rounded-3xl m-1 capitalize ${
                typeColorMap[type[0]]
              }`}
            >
              {type[0]}
            </div>
          ))}
        </div>
        <div className="flex flex-wrap my-3">
          <div className="flex text-xl mt-4 font-bold">
            Offensive Coverage Gaps:
          </div>
          {coverageGaps.map((type, index) => (
            <div
              key={index}
              className={`flex px-5 py-3 rounded-3xl m-1 capitalize ${
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
