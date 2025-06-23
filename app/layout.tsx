import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Sections/Navbar/Navbar";
import Footer from "@/Components/Sections/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victoria's Turks",
  description: "Connecting the Turkish Community across Victoria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  w-full h-full flex flex-col justify-center items-center`}
      >
        <div className="container mx-auto px-5 md:py-3 md:px-20">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
