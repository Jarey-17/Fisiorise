import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import { IMAGES, SEO_DATA, SITE_URL } from "@/constants";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins-loaded",
});

const neulis = localFont({
  src: [
    { path: "./fonts/NeulisCursive-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/NeulisCursive-Bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-neulis-loaded",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEO_DATA.title,
  description: SEO_DATA.description,
  icons: { icon: IMAGES.isotype },
  openGraph: {
    title: SEO_DATA.title,
    description: SEO_DATA.description,
    url: SITE_URL,
    type: "website",
    images: [IMAGES.logo],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_DATA.title,
    description: SEO_DATA.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${neulis.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
