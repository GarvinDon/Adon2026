import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Adon - Product Designer Portfolio",
  description: "Product Designer specializing in B-end high complexity interaction flow optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={cn(inter.variable, "font-sans antialiased min-h-screen bg-white text-gray-900 selection:bg-[#0066FF] selection:text-white")}>
        {children}
      </body>
    </html>
  );
}
