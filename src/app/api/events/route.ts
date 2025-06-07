import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = Number(searchParams.get("limit")) || 30;
  const offset = Number(searchParams.get("offset")) || 0;
  const domain = searchParams.get("domain");
  let query = "SELECT * FROM events";
  const params: unknown[] = [];
  if (domain && domain !== "All") {
    query += " WHERE domain = ?";
    params.push(domain);
  }
  query += " LIMIT ? OFFSET ?";
  params.push(limit, offset);

  const stmt = db.prepare(query);
  const rows = stmt.all(...params);
  return NextResponse.json(rows);
}
