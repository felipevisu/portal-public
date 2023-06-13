import { Inter } from "next/font/google";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Container from "@/components/UI/container";

import "../global.css";

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
      <body className="bg-gray-50 flex flex-col min-h-screen text-slate-900">
        <Header />
        <main className="grow">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
