import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn Next.js - Basic App",
  description: "A basic Next.js app with App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
