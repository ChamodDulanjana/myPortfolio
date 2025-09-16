import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ConditionalHeader from "@/components/conditional-header";
import ThemeContextProvider from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";

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
      <body className={`bg-gray-50 text-gray-950 relative dark:bg-gray-900 `} >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ConditionalHeader />
            {children}
            <ThemeSwitch />
        </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
