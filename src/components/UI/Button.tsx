import React from "react";

interface ButtonProps {
  label: string;
  color: string; // Tailwind color class e.g. "bg-blue-600"
}

export default function Button({ label, color }: ButtonProps) {
  return (
    <button
      className={`text-white px-4 py-2 rounded ${color} hover:opacity-90`}
    >
      {label}
    </button>
  );
}
