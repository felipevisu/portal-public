export const revalidate = 60;

import { Metadata } from "next";

import GridMenu from "@/components/GridMenu";

interface PageProps {
  params: { channel: string };
}

export const metadata: Metadata = {
  title: "Publicidade da Cidade",
};

export default async function Page({ params }: PageProps) {
  return <GridMenu channel={params.channel} />;
}
