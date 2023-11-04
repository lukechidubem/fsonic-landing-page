import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fantom Sonic || Speed",
  description: "Landing page for Fantom Sonic || Speed ($fSONIC)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "#1a1938" }}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
