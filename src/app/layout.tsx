import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis";
import Head from "next/head";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetBrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anthony Chablov",
  description: "Hi, I'm Anthony, I'm A Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/lenis@1.1.18/dist/lenis.css"
        />
      </Head>
      <ReactLenis root>
        <body className={`${jetBrainsMono.className} antialiased`}>
          {children}
        </body>
      </ReactLenis>
    </html>
  );
}
