import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recallio",
  description:
    "Recallio turns your notes into quizzes and flashcards instantly, helping you study smarter with active recall and spaced repetition.",
  icons: {
    icon: "/icon.svg",
    apple: "/logo.png"
  },
  openGraph: {
    title: "Recallio",
    
    description:
      "A system that helps you remember what you learn with active recall and spaced repetition.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recallio",
    description:
      "Turn notes and docs into active recall sessions, flashcards, and finish-the-statement prompts.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
