import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/providers";
import { Lexend } from "next/font/google";

export const metadata: Metadata = {
  title: "The Sarkar Group - SMD",
  description: "This aims to manage Construction Equipment Products, Project Control Services, and Employee Management of Sarkar Group",
};

const lexend = Lexend({
  subsets: ['latin']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
};
