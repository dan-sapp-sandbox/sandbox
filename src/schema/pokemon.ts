import { z } from "zod";

export const pokemonTeamSchema = z.object({
  name: z.string().min(1, "Required"),
  pokemon1_id: z.string().optional(),
  pokemon2_id: z.string().optional(),
  pokemon3_id: z.string().optional(),
  pokemon4_id: z.string().optional(),
  pokemon5_id: z.string().optional(),
  pokemon6_id: z.string().optional(),
  isActive: z.boolean().default(true),
});
