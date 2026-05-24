import type { Metadata } from "next";
import ClientChrome from "@/components/ClientChrome";
import "./globals.css";

export const metadata: Metadata = {
  title: "BB HOSPITALITY | Premium Maid & Hospitality Services",
  description:
    "Book verified maids, cooks, babysitters, patient care, housekeeping, drivers, security guards, and hospitality staff with BB HOSPITALITY.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col font-sans">
        <ClientChrome>{children}</ClientChrome>
      </body>
    </html>
  );
}
