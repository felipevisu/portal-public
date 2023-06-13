import Image from "next/image";
import Link from "next/link";

import Button from "./UI/button";

const ITEMS = [
  {
    title: "Veículos de Comunicação",
    path: "cadastros/veiculos",
    thumbnail: "/vehicle.svg",
  },
  {
    title: "Fornecedores de Serviços",
    path: "cadastros/fornecedores",
    thumbnail: "/provider.svg",
  },
  {
    title: "Investimentos em Publicidade",
    path: "investimentos",
    thumbnail: "/investment.svg",
  },
  {
    title: "Sessões Públicas",
    path: "sessoes",
    thumbnail: "/public.svg",
  },
];

export default function GridMenu({ channel }: { channel: string }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {ITEMS.map((item) => (
        <Link key={item.path} href={`/${channel}/${item.path}`}>
          <div className="bg-white dark:dark:bg-gray-800 rounded-lg block overflow-hidden shadow-sm">
            <div className="relative h-36 my-6 ">
              <Image
                fill={true}
                style={{ objectFit: "contain" }}
                alt={item.title}
                src={item.thumbnail}
              />
            </div>
            <div className="p-4 flex items-center ">
              <h3 className="font-semibold text-lg grow">{item.title}</h3>
              <Button>Acessar</Button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
