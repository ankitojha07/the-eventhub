"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function EventDetailPage() {
  const { id } = useParams();
  interface Event {
    title: string;
    date: string;
    description: string;
    // Add other fields as needed
  }

  const [event, setEvent] = useState<Event | null>(null);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`/api/events/${id}`)
      .then((res) => res.json())
      .then(setEvent);
  }, [id]);

  const handleRegister = async () => {
    const res = await fetch(`/api/events/${id}`, {
      method: "POST",
      body: JSON.stringify({ user_email: email }),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    setMessage(result.message);
  };

  if (!event) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{event.title}</h1>
      <p>{event.date}</p>
      <p className="text-gray-600">{event.description}</p>

      <div className="mt-4">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleRegister}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Register
        </button>
        {message && <p className="text-green-600 mt-2">{message}</p>}
      </div>
    </div>
  );
}
