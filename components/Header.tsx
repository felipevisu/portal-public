import Image from "next/image";
import Link from "next/link";

import Container from "./UI/container";

export default function Header() {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-center gap-8 border-stale-200 py-6 border-b border-gray-200 dark:border-gray-700">
          <div className="lg:grow">
            <div className="flex flex-wrap flex-col-reverse lg:flex-row lg:items-end">
              <Image
                src="/logo-light.svg"
                width={329}
                height={107}
                alt="Publicidade da Cidade"
                className="block dark:hidden"
              />
              <Image
                src="/logo-dark.svg"
                width={329}
                height={107}
                alt="Publicidade da Cidade"
                className="hidden dark:block"
              />
              <div className="-mb-1 text-md lg:text-lg">
                Portal de Transparência de
                <br />
                Investimentos em Publicidade.
              </div>
            </div>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm hidden sm:block">
            <h5 className="text-sm text-gray-500 text-center mb-2">Agência</h5>
            <Image src="/visualize.svg" alt="Agência" width={150} height={50} />
          </div>
        </div>
      </Container>
    </header>
  );
}
