import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Branover9000 — Art, Games & Code ",
    template: "%s | Branover9000",
  },
  description: "Personal portfolio and blog covering art, game development, and web development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} h-full antialiased`}
    >

      <head>
        <link rel="stylesheet" href="https://use.typekit.net/pbs7uht.css" />
      </head>

      <body className="min-h-full flex flex-col text-xl">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
