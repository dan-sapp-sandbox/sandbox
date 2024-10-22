export interface iPokemon {
  id: string;
  pokedexId: number;
  name: string;
  attack: number;
  defense: number;
  hp: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  types: string[];
  spriteUrl: string;
}
