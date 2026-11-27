import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hook & Knots — Modern Fashion Accessories",
  description:
    "Hook & Knots — modern fashion accessories designed for the woman who defines her own style. Handcrafted crochet bags and sandals from Nairobi.",
  openGraph: {
    title: "Hook & Knots — Modern Fashion Accessories",
    description:
      "Handcrafted crochet bags and sandals designed for the woman who defines her own style.",
    type: "website",
    locale: "en_US",
    siteName: "Hook & Knots",
    images: [
      {
        url: "/images/culture7.png",
        width: 1200,
        height: 630,
        alt: "Hook & Knots fashion campaign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hook & Knots — Modern Fashion Accessories",
    description:
      "Handcrafted crochet bags and sandals designed for the woman who defines her own style.",
    images: ["/images/culture7.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
