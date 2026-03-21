import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lab - Onur Senture",
  description: "Experiments and side projects by Onur Senture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
