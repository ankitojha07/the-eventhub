import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="min-h-screen flex flex-col px-4">
      <section className="bg-white rounded-xl shadow-lg p-10 w-full flex flex-col items-center mt-20">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-800 text-center h-full">
          Welcome to EventHub
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Discover, explore, and register for the best tech and non-tech events
          around you. Stay updated and never miss out!
        </p>
        <div className="mb-8 w-full flex flex-col md:flex-row gap-6 justify-center">
          <div className="flex-1 bg-blue-50 rounded-lg p-6 shadow flex flex-col items-center">
            <span className="text-3xl mb-2">🎉</span>
            <h2 className="text-xl font-bold text-blue-700 mb-2">
              For Attendees
            </h2>
            <ul className="text-gray-700 text-center mb-2">
              <li>• Browse upcoming events</li>
              <li>• Register in one click</li>
              <li>• Get event reminders</li>
              <li>• Filter by tech/non-tech</li>
            </ul>
            <Link
              href="/events"
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded transition"
            >
              Find Events
            </Link>
          </div>
          <div className="flex-1 bg-green-50 rounded-lg p-6 shadow flex flex-col items-center">
            <span className="text-3xl mb-2">📊</span>
            <h2 className="text-xl font-bold text-green-700 mb-2">
              For Organizers
            </h2>
            <ul className="text-gray-700 text-center mb-2">
              <li>• Track registrations live</li>
              <li>• View analytics & stats</li>
              <li>• Manage event details</li>
              <li>• Export attendee lists</li>
            </ul>
            <Link
              href="/admin"
              className="mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded transition"
            >
              Go to Admin
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link
            href="/events"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition text-center w-full sm:w-auto"
          >
            Browse Events
          </Link>
          <Link
            href="/admin"
            className="bg-gray-200 hover:bg-gray-300 text-blue-800 font-semibold px-6 py-3 rounded-lg transition text-center w-full sm:w-auto"
          >
            Admin Dashboard
          </Link>
        </div>
      </section>
      <footer className="text-gray-500 text-sm mt-auto text-center py-4">
        &copy; {new Date().getFullYear()} EventHub. All rights reserved.
      </footer>
    </main>
  );
};

export default HomePage;
