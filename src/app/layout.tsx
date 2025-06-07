import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "EventHub",
  description: "Discover and register for events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
