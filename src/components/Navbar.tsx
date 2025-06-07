import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-primary px-6 py-4 flex items-center justify-between shadow">
      <div className="font-bold text-3xl text-primary md:text-4xl">
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
