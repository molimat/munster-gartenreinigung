import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kristallklar Fensterreinigung | Professionelle Glasreinigung in Münster",
  description: "Professionelle Fenster- und Glasreinigung in Münster. Zuverlässig, gründlich und faire Preise. Kostenloses Angebot anfordern!",
  keywords: "Fensterreinigung, Glasreinigung, Münster, Fensterputzer, Gebäudereinigung",
  openGraph: {
    title: "Kristallklar Fensterreinigung Münster",
    description: "Ihre Experten für professionelle Fenster- und Glasreinigung in Münster und Umgebung",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
