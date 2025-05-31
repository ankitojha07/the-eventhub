"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Event = {
  id: string;
  title: string;
  date: string;
  location: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch events");
        return res.json();
      })
      .then((data) => setEvents(data))
      .catch((err) => {
        console.error("Error fetching events:", err);
        setEvents([]); // fallback
      });
  }, []);

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <ul className="space-y-4">
        {events.map((e: Event) => (
          <li key={e.id} className="border p-4 rounded hover:bg-gray-50">
            <Link href={`/events/${e.id}`}>
              <div>
                <h2 className="text-xl font-semibold">{e.title}</h2>
                <p>{e.date}</p>
                <p className="text-sm text-gray-500">{e.location}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
