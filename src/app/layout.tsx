import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osinka Kalaso - Onion Farm Project Kenya",
  description: "Empowering Kenyan farmers through sustainable onion cultivation and water access. Support our borehole project to transform the local community.",
  keywords: "Kenya, onion farming, water project, borehole, sustainable agriculture, community development",
  icons: {
            icon: '/Osinka-Kalaso-Logo.png',
        shortcut: '/Osinka-Kalaso-Logo.png',
        apple: '/Osinka-Kalaso-Logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Osinka-Kalaso-Logo.png" />
        <link rel="shortcut icon" href="/Osinka-Kalaso-Logo.png" />
        <link rel="apple-touch-icon" href="/Osinka-Kalaso-Logo.png" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Navigation />
          <div className="pt-16">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
