import { drizzle } from "drizzle-orm/neon-http";
import { PokemonTable } from "@/drizzle/schema";

export async function getPokemon() {
  "use server";
  const db = drizzle(process.env.DATABASE_URL!);
  const data = await db.select().from(PokemonTable);
  return data;
}
