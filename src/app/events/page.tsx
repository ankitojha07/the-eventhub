"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

type Event = {
  id: string | number;
  title: string;
  date: string;
  count: number;
  domain: string; // Add this line
};

const EventsHomePage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [search, setSearch] = useState("");
  const [domain, setDomain] = useState<string>("All");

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then(setEvents);
  }, []);

  // Get unique domains for filter options
  const domains = ["All", ...Array.from(new Set(events.map((e) => e.domain)))];

  // Filter events by title and domain
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(search.toLowerCase()) &&
      (domain === "All" || event.domain === domain)
  );

  return (
    <main className="min-h-screen bg-gray-900 p-6 max-full mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Upcoming Events
        </h1>
        <p className="text-gray-700 text-3xl">
          Explore and register for the latest events.
        </p>
      </header>

      <section className="flex w-full justify-between items-center h-16">
        <div className="h-full">
          <label
            htmlFor="event-search"
            className="block text-gray-200 font-semibold mb-2"
          >
            Search Events
          </label>
          <input
            id="event-search"
            type="search"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-md border border-gray-400 bg-gray-800 text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="h-full">
          <label className="block text-gray-200 font-semibold">
            Filter by Domain
          </label>
          <select
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="p-2 rounded-md border border-gray-400 bg-white text-gray-900 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {domains.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredEvents.map((event) => (
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

            <Link
              href={`/events/${event.id}`}
              className="mt-auto bg-blue-600 text-white font-semibold rounded-md py-2 hover:bg-blue-700 transition text-center"
            >
              View Details
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default EventsHomePage;
