import { Inter } from "next/font/google";
import Link from "next/link";

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
      <body>
        <header>
          <Link href="/">
            <h1>Publicidade da Cidade</h1>
          </Link>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
