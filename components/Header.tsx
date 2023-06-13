import Image from "next/image";
import Link from "next/link";

import Container from "./UI/container";

export default function Header() {
  return (
    <header className="mb-6">
      <Container>
        <div className="flex items-center border-stale-200 py-6 border-b border-gray-200">
          <div className="grow">
            <h1 className="text-4xl font-bold">
              <Link href="/">Publicidade da Cidade</Link>
            </h1>
            <h3 className="font-semibold ">
              Administração pública com transparência
            </h3>
          </div>
          <div className="bg-gray-100 border border-gray-200 p-3 rounded-lg shadow-sm">
            <h5 className="text-sm text-slate-500 text-center mb-2">Agência</h5>
            <Image src="/visualize.svg" alt="Agência" width={150} height={50} />
          </div>
        </div>
      </Container>
    </header>
  );
}
