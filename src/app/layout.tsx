import type { Metadata } from "next";
import "./globals.css";

const ICON_URL = "https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Flaticon.png";
const OG_URL   = "https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Flaticon.png";

export const metadata: Metadata = {
  title: "PhotoYum — Better Amazon Product Images in 72 Hours",
  description:
    "Premium Amazon product images that drive clicks and sales. Hero images, lifestyle shots, and infographics delivered in 48–72 hours.",
  icons: {
    icon: [
      { url: ICON_URL, type: "image/png" },
    ],
    apple: [
      { url: ICON_URL, type: "image/png" },
    ],
  },
  openGraph: {
    title: "PhotoYum — Better Amazon Product Images in 72 Hours",
    description:
      "Premium Amazon product images that drive clicks and sales. Hero images, lifestyle shots, and infographics delivered in 48–72 hours.",
    type: "website",
    images: [
      {
        url: OG_URL,
        width: 1200,
        height: 630,
        alt: "PhotoYum — Amazon Product Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoYum — Better Amazon Product Images in 72 Hours",
    description:
      "Premium Amazon product images that drive clicks and sales. Hero images, lifestyle shots, and infographics delivered in 48–72 hours.",
    images: [OG_URL],
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
