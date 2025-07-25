import { config } from "dotenv";
import { resolve } from "path";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import schema from "./schema.js";

config({ path: resolve(process.cwd(), "../../.env") });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

export const db = drizzle({ client: pool, schema });
