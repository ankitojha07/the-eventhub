import Database from "better-sqlite3";
import path from "path";

// Use a file-based database for persistence, or ':memory:' for in-memory
const dbPath = path.resolve(process.cwd(), "eventhub.sqlite");
export const db = new Database(dbPath);

// Create table if it doesn't exist
db.exec(`
  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    count INTEGER DEFAULT 0,
    date TEXT NOT NULL,
    domain TEXT NOT NULL
  );
`);

// Seed with sample data if empty
const row = db.prepare("SELECT COUNT(*) as count FROM events").get() as {
  count: number;
};
const count = row.count;
if (count === 0) {
  const insert = db.prepare(
    "INSERT INTO events (title, count, date, domain) VALUES (?, ?, ?, ?)"
  );
  insert.run("React Summit 2025", 1200, "2025-09-12", "Tech");
  insert.run("AI & ML Conference", 950, "2025-10-05", "Tech");
  insert.run("Next.js Workshop", 740, "2025-08-28", "Tech");
  insert.run("Docker Deep Dive", 620, "2025-11-15", "Tech");
  insert.run("Cloud Native Day", 510, "2025-12-03", "Tech");
  insert.run("Startup Pitch Night", 300, "2025-09-20", "No Tech");
  insert.run("Marketing Meetup", 200, "2025-10-10", "No Tech");
}
