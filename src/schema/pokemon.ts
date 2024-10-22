import { z } from "zod";

export const pokemonTeamSchema = z.object({
  name: z.string().min(1, "Required"),
  pokemon1_id: z.number().optional(),
  pokemon2_id: z.number().optional(),
  pokemon3_id: z.number().optional(),
  pokemon4_id: z.number().optional(),
  pokemon5_id: z.number().optional(),
  pokemon6_id: z.number().optional(),
  isActive: z.boolean().default(true),
});

export const pokemonSchema = z.object({
  pokedexId: z.number(),
  name: z.string(),
  spriteUrl: z.string(),
  attack: z.number(),
  defense: z.number(),
  hp: z.number(),
  specialAttack: z.number(),
  specialDefense: z.number(),
  speed: z.number(),
  types: z.array(z.string()),
});
