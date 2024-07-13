import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<Props>) {
  // Readonly<{children: React.ReactNode}
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>

        {/* Navbar Component */}
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>

        {children}
      </body>
    </html>
  );
}
