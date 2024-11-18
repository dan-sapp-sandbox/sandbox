import { ReadonlyURLSearchParams } from "next/navigation";
import FireIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import WaterIcon from "@mui/icons-material/WaterDropOutlined";
import GrassIcon from "@mui/icons-material/GrassOutlined";
import ElectricIcon from "@mui/icons-material/BoltOutlined";
import PsychicIcon from "@mui/icons-material/SelfImprovementOutlined";
import FightingIcon from '@mui/icons-material/FitnessCenterOutlined';
import NormalIcon from '@mui/icons-material/StarOutlineOutlined';
import FlyingIcon from '@mui/icons-material/AirOutlined';
import IceIcon from '@mui/icons-material/AcUnitOutlined';
import PoisonIcon from '@mui/icons-material/CoronavirusOutlined';
import GroundIcon from '@mui/icons-material/TerrainOutlined';
import RockIcon from '@mui/icons-material/DiamondOutlined';
import FairyIcon from '@mui/icons-material/EmojiNatureOutlined';
import BugIcon from '@mui/icons-material/BugReportOutlined';
import SteelIcon from '@mui/icons-material/Shield';
import DarkIcon from '@mui/icons-material/DarkMode';
import GhostIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';
import DragonIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

interface iPokemonMap {
  [key: string]: {
    weaknesses: string[];
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
  };
}
export const pokemonMap: iPokemonMap = {
  normal: {
    weaknesses: ["fighting"],
    icon: NormalIcon,
  },
  fighting: {
    weaknesses: ["flying", "psychic", "fairy"],
    icon: FightingIcon,
  },
  flying: {
    weaknesses: ["rock", "electric", "ice"],
    icon: FlyingIcon,
  },
  poison: {
    weaknesses: ["ground", "psychic"],
    icon: PoisonIcon,
  },
  ground: {
    weaknesses: ["water", "grass", "ice"],
    icon: GroundIcon,
  },
  rock: {
    weaknesses: ["fighting", "ground", "steel", "water", "grass"],
    icon: RockIcon,
  },
  bug: {
    weaknesses: ["flying", "rock", "fire"],
    icon: BugIcon,
  },
  ghost: {
    weaknesses: ["ghost", "dark"],
    icon: GhostIcon,
  },
  steel: {
    weaknesses: ["fighting", "ground", "fire"],
    icon: SteelIcon,
  },
  fire: {
    weaknesses: ["ground", "rock", "water"],
    icon: FireIcon,
  },
  water: {
    weaknesses: ["grass", "electric"],
    icon: WaterIcon,
  },
  grass: {
    weaknesses: ["flying", "poison", "bug", "fire", "ice"],
    icon: GrassIcon,
  },
  electric: {
    weaknesses: ["ground"],
    icon: ElectricIcon,
  },
  psychic: {
    weaknesses: ["bug", "ghost", "dark"],
    icon: PsychicIcon,
  },
  ice: {
    weaknesses: ["fighting", "rock", "steel", "fire"],
    icon: IceIcon,
  },
  dragon: {
    weaknesses: ["ice", "dragon", "fairy"],
    icon: DragonIcon,
  },
  dark: {
    weaknesses: ["fighting", "bug", "fairy"],
    icon: DarkIcon,
  },
  fairy: {
    weaknesses: ["poison", "steel"],
    icon: FairyIcon,
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

export function getFilters(
  searchParams: ReadonlyURLSearchParams,
): string[] {
  const filtersParam = searchParams.get("filters");
  if (filtersParam) {
    const filtersArray = filtersParam.split(",").map(String);
    return filtersArray;
  }
  return [];
}
export function getIds(
  searchParams: ReadonlyURLSearchParams,
): number[] {
  const idsParam = searchParams.get("ids");
  if (idsParam) {
    const idsArray = idsParam.split(",").map(Number);
    return idsArray;
  }
  return [];
}
