import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "EventHub",
  description: "Simplified Events App",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
