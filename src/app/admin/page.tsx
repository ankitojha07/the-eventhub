"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const domains = ["All", "Tech", "No Tech"];

type Event = {
  id: string | number;
  title: string;
  domain: string;
  count: number;
};

const AdminPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [sortBy, setSortBy] = useState<"title" | "count">("count");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");

  // Fetch events from SQLite via API
  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then(setEvents);
  }, []);

  // Filter and sort events
  const filteredEvents = events
    .filter((ev) => selectedDomain === "All" || ev.domain === selectedDomain)
    .sort((a, b) => {
      if (sortBy === "count") {
        return sortDir === "desc" ? b.count - a.count : a.count - b.count;
      }
      return sortDir === "desc"
        ? b.title.localeCompare(a.title)
        : a.title.localeCompare(b.title);
    });

  // You can keep mockDailySignups for now, or fetch real analytics later
  const mockDailySignups = [
    { date: "2025-06-01", count: 30 },
    { date: "2025-06-02", count: 45 },
    { date: "2025-06-03", count: 28 },
    { date: "2025-06-04", count: 60 },
    { date: "2025-06-05", count: 38 },
  ];

  return (
    <main className="w-full mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-900 border-b border-gray-300 pb-4">
        Admin Dashboard
      </h1>

      <section className="mb-12 bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-4">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            Top Events
            <svg
              className="w-5 h-5 ml-2 text-blue-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4"
              />
            </svg>
          </h2>
          <div className="flex gap-2 items-center">
            <label className="text-gray-600 font-medium">Domain:</label>
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className="p-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800"
            >
              {domains.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <label className="text-gray-600 font-medium ml-4">Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "title" | "count")}
              className="p-2 rounded-md border border-gray-300 bg-gray-100 text-gray-800"
            >
              <option value="count">Registrations</option>
              <option value="title">Title</option>
            </select>
            <button
              onClick={() => setSortDir(sortDir === "asc" ? "desc" : "asc")}
              className="ml-2 px-2 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
              title="Toggle sort direction"
            >
              {sortDir === "asc" ? "↑" : "↓"}
            </button>
          </div>
        </div>

        <table className="w-full table-auto text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 font-medium text-gray-600 border-b border-gray-300">
                Title
              </th>
              <th className="py-3 px-4 font-medium text-gray-600 border-b border-gray-300">
                Domain
              </th>
              <th className="py-3 px-4 font-medium text-gray-600 border-b border-gray-300">
                Registrations
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredEvents.map((ev, idx) => (
              <tr
                key={ev.id}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="py-3 px-4 text-blue-700 font-semibold underline hover:text-blue-900 transition">
                  <Link href={`/events/${ev.id}`}>{ev.title}</Link>
                </td>
                <td className="py-3 px-4 text-gray-700">{ev.domain}</td>
                <td className="py-3 px-4 text-gray-700 font-semibold">
                  {ev.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Daily Signups
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-3 px-4 font-medium text-gray-600 border-b border-gray-300">
                  Date
                </th>
                <th className="py-3 px-4 font-medium text-gray-600 border-b border-gray-300">
                  Signups
                </th>
              </tr>
            </thead>
            <tbody>
              {mockDailySignups.map((signup, idx) => (
                <tr
                  key={signup.date}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-3 px-4 text-gray-700">
                    {new Date(signup.date).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4 text-gray-700 font-semibold">
                    {signup.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-gray-500 text-sm italic">
          (Sample data. Integrate with real analytics for live stats.)
        </div>
      </section>
    </main>
  );
};

export default AdminPage;
