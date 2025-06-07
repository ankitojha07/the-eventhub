import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex flex-col items-center justify-center px-4">
      <section className="bg-white rounded-xl shadow-lg p-10 max-w-xl w-full flex flex-col items-center">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-800 text-center">
          Welcome to EventHub
        </h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Discover, explore, and register for the best tech and non-tech events
          around you. Stay updated and never miss out!
        </p>
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
      <footer className="mt-10 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} EventHub. All rights reserved.
      </footer>
    </main>
  );
};

export default HomePage;
