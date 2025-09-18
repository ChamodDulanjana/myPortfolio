import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

// const inter = Inter({
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Chamod Dulanjana",
  description: "Chamod Dulanjana's Portfolio",
  keywords: ["portfolio", "web development", "Chamod Dulanjana"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`} >
      <div>
        <div className="bg-[#f7d5d5] absolute top-[-6rem] right-[8rem] h-[34rem] w-[34rem] rounded-full blur-[8rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#e3e0f8] absolute top-[-1rem] left-[-35rem] h-[34rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      </div>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
