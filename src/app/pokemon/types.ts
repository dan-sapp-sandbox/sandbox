export interface Pokemon {
  name: string;
  url: string;
}
export interface Stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
export interface Type {
  type: {
    name: string;
    url: string;
  };
}
export interface Sprite {
  front_default: string;
}
export interface Details {
  name: string;
  stats: Stat[];
  types: Type[];
  sprites: Sprite;
}
export interface PokemonRes {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
