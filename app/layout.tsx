import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Portfolio | Game & Web Developer",
  description:
    "Unity Game Developer | Fullstack Web Developer | Unreal Engine Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
