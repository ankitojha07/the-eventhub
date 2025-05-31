// src/lib/init-db.ts
import Database from "better-sqlite3";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";

const dbPath = join(process.cwd(), "data");
if (!existsSync(dbPath)) mkdirSync(dbPath);

const db = new Database(join(dbPath, "events.db"));

// Create `events` table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    date TEXT NOT NULL,
    location TEXT,
    capacity INTEGER
  );
`);

export default db;
