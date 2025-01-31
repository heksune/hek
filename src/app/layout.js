import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexendSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
