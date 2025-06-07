import { notFound } from "next/navigation";

type Event = {
  id: string;
  title: string;
  date: string;
  count: number;
  domain?: string;
  description?: string;
  location?: string;
};

type PageProps = {
  params: {
    id: string;
  };
};

async function getEvent(id: string): Promise<Event | undefined> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/events`, {
    cache: "no-store", // just to be safe
  });

  const events: Event[] = await res.json();
  return events.find((e) => String(e.id) === id);
}

export default async function EventDetailPage({ params }: PageProps) {
  const event = await getEvent(params.id);
  if (!event) return notFound();

  const description =
    event.description ||
    "Join us for an exciting event filled with learning, networking, and fun!";
  const location = event.location || "Main Conference Hall";
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
