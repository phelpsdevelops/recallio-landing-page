// Database client and schema definition for Recallio waitlist signups.
// Uses Drizzle ORM with the Neon serverless driver.
//
// Required environment variable:
// - DATABASE_URL: Neon connection string

import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from "drizzle-orm/pg-core";

// Schema for the waitlist_signups table.
// SQL equivalent:
// CREATE TABLE IF NOT EXISTS waitlist_signups (
//   id serial PRIMARY KEY,
//   email text NOT NULL UNIQUE,
//   interest_reason text NOT NULL,
//   created_at timestamptz NOT NULL DEFAULT now()
// );

export const waitlistSignups = pgTable(
  "waitlist_signups",
  {
    id: serial("id").primaryKey(),
    email: text("email").notNull(),
    interestReason: text("interest_reason").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    emailIdx: uniqueIndex("waitlist_signups_email_idx").on(table.email),
  }),
);

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  // We intentionally throw here so misconfigurations are caught early in dev/build.
  throw new Error(
    "DATABASE_URL is not set. Please add it to your environment (e.g. .env.local).",
  );
}

const sql = neon(connectionString);

export const db = drizzle({ client: sql });

