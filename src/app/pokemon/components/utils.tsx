import TypeIcons from "./icons";

interface iPokemonMap {
  [key: string]: {
    weaknesses: string[];
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  };
}
export const pokemonMap: iPokemonMap = {
  normal: {
    weaknesses: ["fighting"],
    // icon: TypeIcons.NormalIcon,
    icon: TypeIcons.FlyingIcon,
  },
  fighting: {
    weaknesses: ["flying", "psychic", "fairy"],
    // icon: TypeIcons.FightingIcon,
    icon: TypeIcons.FlyingIcon,
  },
  flying: {
    weaknesses: ["rock", "electric", "ice"],
    icon: TypeIcons.FlyingIcon,
  },
  poison: {
    weaknesses: ["ground", "psychic"],
    // icon: TypeIcons.PoisonIcon,
    icon: TypeIcons.FlyingIcon,
  },
  ground: {
    weaknesses: ["water", "grass", "ice"],
    icon: TypeIcons.GroundIcon,
  },
  rock: {
    weaknesses: ["fighting", "ground", "steel", "water", "grass"],
    icon: TypeIcons.RockIcon,
  },
  bug: {
    weaknesses: ["flying", "rock", "fire"],
    icon: TypeIcons.BugIcon,
  },
  ghost: {
    weaknesses: ["ghost", "dark"],
    // icon: TypeIcons.GhostIcon,
    icon: TypeIcons.FlyingIcon,
  },
  steel: {
    weaknesses: ["fighting", "ground", "fire"],
    // icon: TypeIcons.SteelIcon,
    icon: TypeIcons.FlyingIcon,
  },
  fire: {
    weaknesses: ["ground", "rock", "water"],
    icon: TypeIcons.FireIcon,
  },
  water: {
    weaknesses: ["grass", "electric"],
    icon: TypeIcons.GrassIcon,
  },
  grass: {
    weaknesses: ["flying", "poison", "bug", "fire", "ice"],
    icon: TypeIcons.GrassIcon,
  },
  electric: {
    weaknesses: ["ground"],
    icon: TypeIcons.ElectricIcon,
  },
  psychic: {
    weaknesses: ["bug", "ghost", "dark"],
    icon: TypeIcons.PsychicIcon,
  },
  ice: {
    weaknesses: ["fighting", "rock", "steel", "fire"],
    // icon: TypeIcons.IceIcon,
    icon: TypeIcons.FlyingIcon,
  },
  dragon: {
    weaknesses: ["ice", "dragon", "fairy"],
    // icon: TypeIcons.DragonIcon,
    icon: TypeIcons.FlyingIcon,
  },
  dark: {
    weaknesses: ["fighting", "bug", "fairy"],
    icon: TypeIcons.DarkIcon,
  },
  fairy: {
    weaknesses: ["poison", "steel"],
    // icon: TypeIcons.FairyIcon,
    icon: TypeIcons.FlyingIcon,
  },
};

export const typeColorMap: { [key: string]: string } = {
  normal: "bg-neutral-300 font-black text-black hover:bg-neutral-200",
  fighting: "bg-orange-600 font-black text-white hover:bg-orange-500",
  flying: "bg-blue-300 font-black text-black hover:bg-blue-200",
  poison: "bg-violet-400 font-black text-black hover:bg-violet-300",
  ground: "bg-amber-800 font-black text-white hover:bg-amber-700",
  rock: "bg-slate-500 font-black text-white hover:bg-slate-400",
  bug: "bg-lime-400 font-black text-black hover:bg-lime-300",
  ghost: "bg-indigo-500 font-black text-white hover:bg-indigo-400",
  steel: "bg-zinc-500 font-black text-white hover:bg-zinc-400",
  fire: "bg-red-600 font-black text-white hover:bg-red-400",
  water: "bg-blue-600 font-black text-white hover:bg-blue-500",
  grass: "bg-green-500 font-black text-white hover:bg-green-400",
  electric: "bg-yellow-500 font-black text-white hover:bg-yellow-400",
  psychic: "bg-purple-600 font-black text-white hover:bg-purple-500",
  ice: "bg-cyan-300 font-black text-black hover:bg-cyan-200",
  dragon: "bg-red-300 font-black text-black hover:bg-red-200",
  dark: "bg-gray-700 font-black text-white hover:bg-gray-600",
  fairy: "bg-pink-400 font-black text-white hover:bg-pink-300",
};