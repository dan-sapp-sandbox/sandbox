import { drizzle } from "drizzle-orm/neon-http";
import { PokemonTable } from "@/drizzle/schema";
import { lte } from "drizzle-orm";

export async function getPokemon() {
  "use server";
  const db = drizzle(process.env.DATABASE_URL!);
  const data = await db.select().from(PokemonTable).where(
    lte(PokemonTable.pokedexId, 151),
  )
    .execute();
  console.log("makes call");
  return data;
}
