import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hook & Knots — Modern Fashion Accessories",
  description:
    "Hook & Knots — modern fashion accessories designed for the woman who defines her own style.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
