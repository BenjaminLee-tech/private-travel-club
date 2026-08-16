import { config } from "dotenv";
import { defineConfig } from "prisma/config";

config({ override: true });

export default defineConfig({
  schema: "prisma/schema.prisma",

  migrations: {
    path: "prisma/migrations",
  },

  datasource: {
    url: process.env.DATABASE_URL,
  },
});