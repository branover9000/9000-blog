import type { Metadata } from "next";
import { EB_Garamond, Pirata_One } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

const pirataOne = Pirata_One({
  variable: "--font-pirata-one",
  subsets: ["latin"],
  weight: "400",
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
      className={`${ebGaramond.variable} ${pirataOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-xl">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
