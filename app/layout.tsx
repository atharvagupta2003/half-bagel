import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Half Bagel — An Extension of Your Brand",
  description:
    "Half Bagel is an embedded brand, marketing & growth partner. We integrate with your leadership team to drive brand strategy, creative direction, and commercial growth.",
  keywords: [
    "brand strategy",
    "creative agency",
    "brand identity",
    "marketing partner",
    "growth agency",
    "embedded agency",
    "creative direction",
    "brand positioning",
  ],
  openGraph: {
    title: "Half Bagel — An Extension of Your Brand",
    description:
      "Embedded brand, marketing & growth partner. We become part of your team — not just your agency.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Half Bagel — An Extension of Your Brand",
    description:
      "Embedded brand, marketing & growth partner. We become part of your team — not just your agency.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
