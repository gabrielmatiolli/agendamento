"use client"

import { Inter } from "next/font/google";
import "../globals.css";
import Providers from "../providers";
import { ToggleColorMode } from "@/components/toggle-color-mode";

const inter = Inter({
  variable: "--font-inter",
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
        className={`${inter.variable} antialiased font-[var(--font-inter)]`}
        suppressHydrationWarning
        suppressContentEditableWarning
      >
        <Providers>
          {children}
          <ToggleColorMode />
        </Providers>
      </body>
    </html>
  );
}
