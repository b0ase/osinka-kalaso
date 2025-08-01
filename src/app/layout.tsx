import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Osinka Kalaso - Onion Farm Project Kenya",
  description: "Empowering Kenyan farmers through sustainable onion cultivation and water access. Support our borehole project to transform the local community.",
  keywords: "Kenya, onion farming, water project, borehole, sustainable agriculture, community development",
  icons: {
    icon: '/images/Osinka Kallaso/Osinka-Kalaso-Logo.JPG',
    shortcut: '/images/Osinka Kallaso/Osinka-Kalaso-Logo.JPG',
    apple: '/images/Osinka Kallaso/Osinka-Kalaso-Logo.JPG',
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
        <link rel="icon" href="/images/Osinka Kallaso/Osinka-Kalaso-Logo.JPG" />
        <link rel="shortcut icon" href="/images/Osinka Kallaso/Osinka-Kalaso-Logo.JPG" />
        <link rel="apple-touch-icon" href="/images/Osinka Kallaso/Osinka-Kalaso-Logo.JPG" />
      </head>
      <body className={inter.className}>
        <Navigation />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
