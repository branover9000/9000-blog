import type { Metadata } from "next";
import { DM_Sans, EB_Garamond, Pirata_One } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

const pirataOne = Pirata_One({
  variable: "--font-cabazon",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Branover9000 — Art, Games & Code",
    template: "%s | Branover9000",
  },
  description: "Personal portfolio and blog covering art, game development, and web development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${pirataOne.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col text-lg">
        <a
          href="#main-content"
          className="sr-only z-50 bg-surface px-4 py-3 text-lg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
