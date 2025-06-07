import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const stmt = db.prepare("SELECT * FROM events");
  const rows = stmt.all();
  return NextResponse.json(rows);
}
