import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Developer Portfolio | Case Studies",
  description:
    "Portfolio featuring case studies for IBL Group, The West, Maurema, and more. Modern React and Next.js development.",
  keywords: "Web Developer, React, Next.js, Portfolio, Mauritius",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} text-slate-50 flex flex-col min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
