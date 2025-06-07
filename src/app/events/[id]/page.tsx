import { notFound } from "next/navigation";

type Event = {
  id: string | number;
  title: string;
  date: string;
  count: number;
};

async function getEvent(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/events`
  );
  const events: Event[] = await res.json();
  return events.find((e: Event) => String(e.id) === id);
}

export default async function EventDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const event = await getEvent(params.id);

  if (!event) return notFound();

  return (
    <main className="min-h-screen bg-gray-900 p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-gray-900">{event.title}</h1>
      <p className="text-gray-700 mb-2">
        <strong>Date:</strong>{" "}
        <time dateTime={event.date}>
          {new Date(event.date).toLocaleDateString(undefined, {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
      </p>
      <p className="text-gray-700 mb-4">
        <strong>Registrations:</strong> {event.count}
      </p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Register
      </button>
    </main>
  );
}
