import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
      <div className="font-bold text-xl">
        <Link href="/">EventHub</Link>
      </div>
      <div className="space-x-4 text-sm md:text-lg">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/events" className="hover:underline">
          Events
        </Link>
        <Link href="/admin" className="hover:underline">
          Admin
        </Link>
      </div>
    </nav>
  );
}
