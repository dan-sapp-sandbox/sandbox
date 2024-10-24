import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";
config({ path: ".env" });

export default defineConfig({
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/migrations",
  dialect: "postgresql",
  strict: true,
  verbose: true,
  dbCredentials: {
    url: process.env.REACT_APP_DATABASE_URL as string,
  },
});
