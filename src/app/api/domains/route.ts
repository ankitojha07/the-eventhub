import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const rows = db.prepare("SELECT DISTINCT domain FROM events").all() as {
    domain: string;
  }[];
  const domains = rows.map((r) => r.domain).filter(Boolean);
  return NextResponse.json(domains);
}
