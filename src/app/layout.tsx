import type { Metadata } from "next";
import "./globals.css";

const ICON_URL = "https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Flaticon.png";
const OG_URL   = "https://rjudiqojqxpoltfpgnej.supabase.co/storage/v1/object/public/Storage/logo/Flaticon.png";
const BASE_URL = "https://photoyum.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "PhotoYum — Product Photos & Videos for Amazon, Shopify, eBay & Websites",
  description:
    "PhotoYum creates product photos, lifestyle images, infographic images, and product videos for Amazon sellers, Shopify stores, eBay sellers, websites, and ecommerce brands. Packages start at $500 per product.",
  alternates: { canonical: BASE_URL },
  keywords: [
    "Amazon product photography",
    "Amazon listing images",
    "product photography for Amazon sellers",
    "ecommerce product photography",
    "Shopify product photography",
    "eBay product photography",
    "product videos for Amazon",
    "Amazon infographic images",
    "product image package",
  ],
  icons: {
    icon:  [{ url: ICON_URL, type: "image/png" }],
    apple: [{ url: ICON_URL, type: "image/png" }],
  },
  openGraph: {
    title: "PhotoYum — Product Photos & Videos for Amazon, Shopify, eBay & Websites",
    description:
      "PhotoYum creates product photos, lifestyle images, infographic images, and product videos for Amazon sellers, Shopify stores, eBay sellers, and ecommerce brands. Packages start at $500.",
    type: "website",
    url: BASE_URL,
    siteName: "PhotoYum",
    images: [{ url: OG_URL, width: 1200, height: 630, alt: "PhotoYum — Product Photography for Amazon, Shopify, eBay & Websites" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PhotoYum — Product Photos & Videos for Amazon, Shopify, eBay & Websites",
    description:
      "PhotoYum creates Amazon-ready product images and videos for ecommerce brands. Packages start at $500 per product. 48–72 hour delivery.",
    images: [OG_URL],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: "PhotoYum",
  url: BASE_URL,
  logo: ICON_URL,
  description: "PhotoYum is a product photo and video agency for Amazon sellers, Shopify stores, eBay sellers, websites, and ecommerce brands. Packages start at $500 per product.",
  priceRange: "$$",
  areaServed: { "@type": "Country", name: "United States" },
  serviceType: ["Amazon Product Photography", "Ecommerce Product Photography", "Product Videos"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Product Image Packages",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Product Image Package",
        description: "Up to 10 product images including hero, lifestyle, and infographic images. Starting at $500 per product.",
        price: "500",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Image + Video Package",
        description: "Everything in the Product Image Package plus a product showcase video. Starting at $700 per product.",
        price: "700",
        priceCurrency: "USD",
      },
    ],
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
