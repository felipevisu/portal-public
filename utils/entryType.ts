import { EntryTypeEnum } from "@/portal/api";

export const getEntryType = (type: string) => {
  if (type === "fornecedores") return EntryTypeEnum.PROVIDER;
  if (type === "veiculos") return EntryTypeEnum.VEHICLE;
  return null;
};

export function getTypeLabel(type: string) {
  if (type === "veiculos") return "Veículos de Comunicação";
  return "Fornecedores de Serviços";
}
