"use server";

import { db } from "@/drizzle/db";
import { PokemonTable } from "@/drizzle/schema";
import { pokemonSchema } from "@/schema/pokemon";
import { z } from "zod";

export async function updatePokemon(
  unsafeData: z.infer<typeof pokemonSchema>[],
) {
  console.log("unsafeData", unsafeData);

  // const { success, data, error } = pokemonSchema.safeParse(unsafeData);

  // if (!success) {
  //   throw new Error("Invalid data", error);
  // }
  // const pokemon: typeof PokemonTable.$inferInsert = unsafeData[0];
  // await db.insert(PokemonTable).values(pokemon);
  // console.log('New user created!')
  const pokemons = await db.select().from(PokemonTable);
  console.log("Getting all users from the database: ", pokemons);
}
