import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { config } from "dotenv";

config({ path: ".env" });

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
export const db = drizzle({ client: sql });