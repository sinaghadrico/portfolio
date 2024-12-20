import { Nunito } from "next/font/google";

import "./globals.css";
import { Footer, Header } from "@/components";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sina Ghadri",
  description: "Sina Ghadri's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Primary Meta Tags */}
        <title>Sina Ghadri</title>
        <meta name="title" content="Sina Ghadri" />
        <meta name="description" content="Sina Ghadri's portfolio" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sinaghadri.com/" />
        <meta property="og:title" content="Sina Ghadri" />
        <meta property="og:description" content="Sina Ghadri's portfolio" />
        <meta
          property="og:image"
          content="https://sinaghadri.com/images/avatar.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sinaghadri.com/" />
        <meta property="twitter:title" content="Sina Ghadri" />
        <meta
          property="twitter:description"
          content="Sina Ghadri's portfolio"
        />
        <meta
          property="twitter:image"
          content="https://sinaghadri.com/images/avatar.jpg"
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
