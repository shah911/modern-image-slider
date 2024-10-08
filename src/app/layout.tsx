import type { Metadata } from "next";
import { Bodoni_Moda } from "next/font/google";
import "./globals.css";

const bodoni_Moda = Bodoni_Moda({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Image Slider",
  description: "Created by framer motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodoni_Moda.className}>{children}</body>
    </html>
  );
}
