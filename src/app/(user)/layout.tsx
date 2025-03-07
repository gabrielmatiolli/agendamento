"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Providers from "../providers";
import { ToggleColorMode } from "@/components/toggle-color-mode";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
        suppressContentEditableWarning
      >
        <Providers>
          <Header />
          {children}
          <ToggleColorMode />
        </Providers>
      </body>
    </html>
  );
}
