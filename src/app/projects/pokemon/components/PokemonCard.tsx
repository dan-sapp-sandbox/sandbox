import { iPokemon } from "../api/types";

interface PokemonCardProps {
  pokemon?: iPokemon;
  updateTeam?: (newTeam: iPokemon[]) => void;
  team: iPokemon[];
  isTeam?: boolean;
}

export default function PokemonCard(
  { pokemon, updateTeam, team, isTeam }: PokemonCardProps,
): JSX.Element {
  const png = `data:image/png;base64,${pokemon?.imageBlob}`;
  const alreadyOnTeam = team.find((member) => member.name === pokemon?.name);

  function clickHandler(pokemon: iPokemon): void {
    if (!pokemon) return;

    let newTeam: iPokemon[];
    if (alreadyOnTeam) {
      newTeam = team.filter((member) => member.pokedexId !== pokemon.pokedexId);
    } else {
      newTeam = team.length < 6 ? [...team, pokemon] : team;
    }

    updateTeam?.(newTeam);
  }

  return (
    <div
      className={`col-span-1 rounded-lg justify-center items-center 
      ${
        (team.length < 6 || alreadyOnTeam || isTeam) &&
        "cursor-pointer hover:bg-sky-200"
      }
        ${isTeam && "bg-indigo-300"}
        ${(!alreadyOnTeam && !isTeam) && "bg-slate-400"}
        ${(alreadyOnTeam && !isTeam) && "bg-indigo-300"}`}
      onClick={() => pokemon && clickHandler(pokemon)}
    >
      <div className="p-0">
        {pokemon
          ? (
            /* eslint-disable-next-line */
            <img
              className={isTeam
                ? "mx-auto min-w-12 max-w-14 sm:max-w-16 md:max-w-24 lg:max-w-36 xl:max-w-42 2xl:h-48"
                : "mx-auto min-w-12 max-w-24 sm:max-w-28 md:max-w-36 lg:max-w-40 xl:max-w-44 2xl:max-w-44"}
              src={png}
              alt="pokemon"
              width={300}
              height={300}
              loading="lazy"
            />
          )
          : (
            <div className="rounded-lg bg-slate-400 py-1 h-14 sm:h-16 md:h-24 lg:h-36 xl:h-42 2xl:h-48">
            </div>
          )}
      </div>
    </div>
  );
}
