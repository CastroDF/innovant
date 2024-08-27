import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from './providers'
import Header from "@/components/Header";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Innovant",
  description: "Innovating solutions for a digital world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <Providers>
          <Header />
          { children }
        </Providers>
      </body>
    </html>
  );
}
