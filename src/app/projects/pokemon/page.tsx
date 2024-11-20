import { getPokemon } from "./api/pokemon";
import TeamBuilder from "./components/TeamBuilder";

export default async function PokemonPage(): Promise<JSX.Element> {
  const initialData = await getPokemon();
  return <TeamBuilder pokemonData={initialData}></TeamBuilder>;
}
