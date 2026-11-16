import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const body = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kemet Marketing Solutions — AI-Powered Marketing Agency",
    template: "%s — Kemet Marketing Solutions",
  },
  description:
    "Tailored AI-powered marketing solutions for a smarter, stronger brand. Strategy, media buying, branding and SEO across the USA and the Gulf.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <SmoothScroll>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
