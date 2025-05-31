import React from "react";

const page = () => {
  const topEvents = [
    { id: 1, title: "React Summit 2025", count: 1200 },
    { id: 2, title: "AI & ML Conference", count: 950 },
    { id: 3, title: "Next.js Workshop", count: 740 },
    { id: 4, title: "Docker Deep Dive", count: 620 },
    { id: 5, title: "Cloud Native Day", count: 510 },
  ];

  return (
    <main className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-900 border-b border-gray-300 pb-4">
        Admin Dashboard
      </h1>

      <section className="mb-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
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

        <table className="w-full table-auto text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 font-medium text-gray-600 border-b border-gray-300">
                Title
              </th>
              <th className="py-3 px-4 font-medium text-gray-600 border-b border-gray-300">
                Registrations
              </th>
            </tr>
          </thead>
          <tbody>
            {topEvents.map((ev, idx) => (
              <tr
                key={ev.id}
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="py-3 px-4 text-gray-700">{ev.title}</td>
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
        <p className="text-gray-600 italic">Data coming soon...</p>
      </section>
    </main>
  );
};

export default page;
