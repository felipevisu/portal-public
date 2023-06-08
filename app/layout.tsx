import Link from "next/link";

import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
