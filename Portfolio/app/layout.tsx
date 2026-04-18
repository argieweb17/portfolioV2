import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/Background/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Me.png" type="image/png" sizes="32x32" />
      </head>
      <body className={`${inter.className} text-blue-100 bg-[#070c22]`}>
        <StarsCanvas />
        {children}
      </body>
    </html>
  );
}
