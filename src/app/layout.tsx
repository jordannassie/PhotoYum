import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhotoYum — Better Amazon Product Images in 72 Hours",
  description:
    "Premium Amazon product images that drive clicks and sales. Hero images, lifestyle shots, and infographics delivered in 48–72 hours.",
  openGraph: {
    title: "PhotoYum — Better Amazon Product Images in 72 Hours",
    description:
      "Premium Amazon product images that drive clicks and sales. Hero images, lifestyle shots, and infographics delivered in 48–72 hours.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
