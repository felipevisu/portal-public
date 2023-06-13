import Image from "next/image";
import Link from "next/link";

import Button from "./UI/button";

const ITEMS = [
  {
    title: "Veículos de Comunicação",
    path: "cadastros/veiculos",
    thumbnail: "/vehicles.jpg",
  },
  {
    title: "Fornecedores de Serviços",
    path: "cadastros/fornecedores",
    thumbnail: "/providers.jpg",
  },
  {
    title: "Investimentos em Publicidade",
    path: "investimentos",
    thumbnail: "/investment.jpg",
  },
  {
    title: "Sessões Públicas",
    path: "sessoes",
    thumbnail: "/public-session.jpg",
  },
];

export default function GridMenu({ channel }: { channel: string }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      {ITEMS.map((item) => (
        <Link key={item.path} href={`/${channel}/${item.path}`}>
          <div className="bg-white rounded-lg border border-slate-200 block overflow-hidden">
            <div className="relative h-48">
              <Image
                fill={true}
                style={{ objectFit: "cover" }}
                alt={item.title}
                src={item.thumbnail}
              />
            </div>
            <div className="p-4 xl:flex items-end">
              <div className="grow">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <h5 className="text-slate-500 mb-3 xl:mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h5>
              </div>
              <Button>Acessar</Button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
