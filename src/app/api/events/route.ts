import { NextResponse } from "next/server";

const events = [
  {
    id: 1,
    title: "React Summit 2025",
    count: 1200,
    date: "2025-09-12",
    domain: "Tech",
  },
  {
    id: 2,
    title: "AI & ML Conference",
    count: 950,
    date: "2025-10-05",
    domain: "Tech",
  },
  {
    id: 3,
    title: "Next.js Workshop",
    count: 740,
    date: "2025-08-28",
    domain: "Tech",
  },
  {
    id: 4,
    title: "Docker Deep Dive",
    count: 620,
    date: "2025-11-15",
    domain: "Tech",
  },
  {
    id: 5,
    title: "Cloud Native Day",
    count: 510,
    date: "2025-12-03",
    domain: "Tech",
  },
  {
    id: 6,
    title: "Startup Pitch Night",
    count: 300,
    date: "2025-09-20",
    domain: "No Tech",
  },
  {
    id: 7,
    title: "Marketing Meetup",
    count: 200,
    date: "2025-10-10",
    domain: "No Tech",
  },
];

export async function GET() {
  return NextResponse.json(events);
}
