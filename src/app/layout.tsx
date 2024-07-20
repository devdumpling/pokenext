import type { Metadata } from "next";
import "../styles/globals.css";

import { Inter, Pixelify_Sans } from "next/font/google";

import { Header } from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "Pokenext",
  description: "The Next.js Pokedex!",
};

// font setup
const pixel = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixel",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${pixel.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
