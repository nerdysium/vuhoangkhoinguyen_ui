import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vu Hoang Khoi Nguyen - Product Manager Portfolio",
  description:
    "Product manager from FPT Software, ID. Currently managing at Rectangle. Specializing in visual design, branding, and product design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-[#f5f5f5] dark:bg-[#1a1a1a] px-2 py-2`}
      >
        <div className="mx-auto min-h-screen max-w-[560px] pt-20 md:pt-23 py-10 flex flex-col items-center justify-start">
          <Header />
          <div
            className="w-full px-2 py-2 rounded-2xl bg-white dark:bg-[#252525]
           shadow-[0_1.2px_1.2px_rgba(10,10,10,0.06),0_5px_10px_rgba(10,10,10,0.04)]"
          >
            {children}
            <Footer />
          </div>
        </div>
        <GoogleAnalytics gaId="G-672QBN0VJC" />
      </body>
    </html>
  );
}
