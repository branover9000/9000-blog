import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Branover9000 — Art, Games & Code's ",
    template: "%s | Branover9000",
  },
  description: "Personal portfolio and blog covering art, game development, and web development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <head>
        <link rel="stylesheet" href="https://use.typekit.net/pbs7uht.css" />
      </head>

      <body className="min-h-full flex flex-col text-xl">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
