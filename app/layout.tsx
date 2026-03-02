import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mingo - Guess Songs, Win Games",
  description:
    "Listen to songs, guess the title, and compete with friends in real-time music bingo. Available on iOS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
        <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
          <div className="flex items-center justify-center gap-6">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <Link href="/privacy" className="hover:text-gray-700">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-700">
              Terms of Use
            </Link>
          </div>
          <p className="mt-4">&copy; {new Date().getFullYear()} Cool Studio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
