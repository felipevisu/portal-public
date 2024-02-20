import { Inter } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Container from "@/components/UI/container";

import "../global.scss";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-gray-100 dark:bg-gray-900 flex flex-col min-h-screen text-gray-900 dark:text-white">
        <Header />
        <main className="grow">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
