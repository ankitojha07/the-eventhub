import React from "react";

const events = [
  { id: 1, title: "React Summit 2025", count: 1200, date: "2025-09-12" },
  { id: 2, title: "AI & ML Conference", count: 950, date: "2025-10-05" },
  { id: 3, title: "Next.js Workshop", count: 740, date: "2025-08-28" },
  { id: 4, title: "Docker Deep Dive", count: 620, date: "2025-11-15" },
  { id: 5, title: "Cloud Native Day", count: 510, date: "2025-12-03" },
];

const EventsHomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50 p-6 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Upcoming Events
        </h1>
        <p className="text-gray-700">
          Explore and register for the latest events.
        </p>
      </header>

      {/* Search bar (UI only) */}
      <div className="mb-8 max-w-md">
        <input
          type="search"
          placeholder="Search events..."
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Events grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 text-gray-900">
                {event.title}
              </h2>
              <p className="text-gray-600 mb-1">
                Date:{" "}
                <time dateTime={event.date} className="font-medium">
                  {new Date(event.date).toLocaleDateString(undefined, {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
              </p>
              <p className="text-gray-600 mb-4">
                <strong>{event.count}</strong> Registrations
              </p>
            </div>

            <button
              type="button"
              className="mt-auto bg-blue-600 text-white font-semibold rounded-md py-2 hover:bg-blue-700 transition"
            >
              Register
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default EventsHomePage;
