import { notFound } from "next/navigation";

type Event = {
  id: string | number;
  title: string;
  date: string;
  count: number;
  domain?: string;
  description?: string;
  location?: string;
};

async function getEvent(id: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (typeof window === "undefined" ? "http://localhost:3000" : "");
  const res = await fetch(`${baseUrl}/api/events`);
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

  // Example fallback details if not present in DB
  const description =
    event.description ||
    "Join us for an exciting event filled with learning, networking, and fun! Don`t miss out on the latest trends and insights.";
  const location = event.location || "Main Conference Hall, City Center";
  const domain = event.domain || "General";

  return (
    <main className="min-h-screen flex flex-col items-center px-4 pt-20">
      <section className="bg-card rounded-xl shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-primary">{event.title}</h1>
        <div className="mb-4 flex flex-wrap gap-4">
          <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
            Domain: {domain}
          </span>
          <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
            Date:{" "}
            <time dateTime={event.date}>
              {new Date(event.date).toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </span>
          <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
            Registrations: {event.count}
          </span>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-primary mb-2">
            Description
          </h2>
          <p className="text-secondary">{description}</p>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Location</h2>
          <p className="text-gray-700">{location}</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition font-semibold w-full">
          Register
        </button>
      </section>
    </main>
  );
}
