import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Header from "../components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexendSans = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata = {
  title: "heksune.xyz",
  description: "A personal website for heksune.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${lexendSans.variable} antialiased min-h-screen flex flex-col items-center`}>
        <Background />
        <Navbar />
        <div className="mx-auto w-full max-w-[800px] px-8 z-10 flex flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
