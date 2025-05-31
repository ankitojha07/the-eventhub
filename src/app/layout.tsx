import "./globals.css";
import { ReactNode } from "react";
import { initializeDatabase } from "../lib/init-db";

export const metadata = {
  title: "EventHub",
  description: "Simplified Events App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  initializeDatabase(); // ⚠️ Called only on the server

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
