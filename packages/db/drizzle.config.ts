import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({ path: "../../.env" });

const config = defineConfig({
  schema: "./src/schema.ts",
  out: "./migration",
  dialect: "postgresql",
  dbCredentials: {
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    url: process.env.SUPABASE_DATABASE_URL as string,
  },
});

export default config;
