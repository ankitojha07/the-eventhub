import { notFound } from "next/navigation";

type Event = {
  id: string | number;
  title: string;
  date: string;
  description?: string;
};

async function getEvent(id: string): Promise<Event | undefined> {
  const res = await fetch(
    `${
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    }/api/events?limit=1000`,
    { cache: "no-store" }
  );
  const events: Event[] = await res.json();
  return events.find((e) => String(e.id) === id);
}

export default async function EventDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const event = await getEvent(params.id);

  if (!event) {
    notFound();
    return null;
  }

  return (
    <main className="p-8 mt-20">
      <h1 className="text-2xl font-bold mb-4">
        {event.title || "No title available."}
      </h1>
      <p>{event.description || "No description available."}</p>
    </main>
  );
}
