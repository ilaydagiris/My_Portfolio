import { Geist, Geist_Mono } from "next/font/google";
import { Sawarabi_Mincho, Quicksand } from "next/font/google";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sawarabiMincho = Sawarabi_Mincho({
  variable: "--font-ghibli-title",
  subsets: ["latin"],
  weight: "400",
});

const quicksand = Quicksand({
  variable: "--font-ghibli-body",
  subsets: ["latin"],
  weight: "300",
});

export const metadata = {
  title: "İlayda GİRİŞ - Portfolio",
  description: "İlayda GİRİŞ'in kişisel portföy sitesi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${sawarabiMincho.variable} ${quicksand.variable} antialiased overflow-x-hidden bg-[#0B1120]`}>
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
