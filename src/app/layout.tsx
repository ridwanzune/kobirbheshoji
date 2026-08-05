import type { Metadata } from "next";
import { Syne, Space_Grotesk, DM_Sans, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/components/LangContext";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoBengali = Noto_Sans_Bengali({
  variable: "--font-bangla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "কবীর ভেষজী | Kobir Bheshoji — Premium Herbal Wellness",
  description:
    "প্রাকৃতিক হার্বাল সাপ্লিমেন্ট — কবীর ভেষজী। Herbirod by Noni — জাফরান ও রেড পানাক্স। Authentic Bangladeshi herbal supplements.",
  keywords: [
    "কবীর ভেষজী",
    "Kobir Bheshoji",
    "herbal supplements",
    "Bangladeshi wellness",
    "Noni",
    "Saffron",
    "জাফরান",
    "Red Panax",
    "natural health",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "কবীর ভেষজী | Kobir Bheshoji",
    description:
      "প্রাকৃতিক হার্বাল সাপ্লিমেন্ট — Herbirod by Noni। Authentic Bangladeshi herbal supplements.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kobir Bheshoji — Premium Herbal Wellness",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "কবীর ভেষজী | Kobir Bheshoji",
    description:
      "প্রাকৃতিক হার্বাল সাপ্লিমেন্ট — Herbirod by Noni।",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      className={`${syne.variable} ${spaceGrotesk.variable} ${dmSans.variable} ${notoBengali.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className="min-h-screen bg-[var(--bg)] text-[var(--fg)] antialiased" suppressHydrationWarning>
        <LangProvider>
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
