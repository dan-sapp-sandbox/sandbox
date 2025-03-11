import { iPokemon } from "../api/types";
import Radar from "./Radar";
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
export default function Analysis({ team }: iProps): JSX.Element {
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

  const weaknessMap = new Map<string, number>();
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

  const weaknessArray = Array.from(weaknessMap)
    .filter((x) => x[1] > 1)
    .sort((a, b) => b[1] - a[1])
    .map((x) => x[0]);

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
      <div className="col-span-12 md:pl-8">
        <Section
          title="Pokemon Team Types:"
          types={teamTypes}
          team={team}
        />
        <Section
          title="Common Vulnerablilities:"
          types={weaknessArray}
          team={team}
        />
        <Section
          title="Offensive Coverage Gaps:"
          types={coverageGaps}
          team={team}
        />
      </div>
    </div>
  );
}

interface iSection {
  title: string;
  types: string[];
  team: iPokemon[];
}
const Section = ({ title, types, team }: iSection): JSX.Element => {
  return (
    <div className="grid flex-wrap my-2 grid-cols-9 items-center gap-1">
      <div className="flex xs:text-sm xl:text-xl font-bold col-span-9 text-zinc-200">
        {title}
      </div>
      {types.map((type, index) => {
        const Icon = pokemonMap[type].icon;
        if (!team.length) return;
        return (
          <div
            key={index}
            className={`flex justify-center align-center col-span-1 p-1 rounded-lg ${
              typeColorMap[type]
            }`}
          >
            <Icon />
          </div>
        );
      })}
    </div>
  );
};
