import { Nunito } from "next/font/google";

import "./globals.css";
import { Footer, Header } from "@/components";
import { appDetails } from "@/utils/configs";
import { Metadata } from "next";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(appDetails.url),
  category: appDetails.category,
  robots: "index, follow",
  title: appDetails.title,
  description: appDetails.description,
  alternates: {
    canonical: `${appDetails.url}`,
  },
  keywords: [
    "sina",
    "sina ghadri",
    "ghadri",
    "سینا",
    "سینا قدری",
    "قدری",
    "portfolio",
    "Frontend",
    "Developer",
    "React",
    "TypeScript",
    "JavaScript",
    "Web3",
    "Blockchain",
    "DeFi",
    "EVM",
    "Solidity",
    "TON",
  ],
  openGraph: {
    title: appDetails.title,
    description: appDetails.description,
    type: "website",
    images: [appDetails.ogImageURL],
    url: `${appDetails.url}`,
  },
  twitter: {
    card: "summary_large_image",
    title: appDetails.title,
    description: appDetails.description,
    site: appDetails.twitterUserName,
    images: [appDetails.ogImageURL],
    creator: appDetails.twitterUserName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:image"
          content="https://sinaghadri.com/images/avatar-2.jpg"
        />

        <meta
          property="twitter:image"
          content="https://sinaghadri.com/images/avatar-2.jpg"
        />

        {/* favicon */}
        <link rel="shortcut icon" href="/src/app/favicon.ico" />
      </head>
      <body className={`${nunito.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
