import { EntryTypeEnum } from "@/portal/api";

export const getEntryType = (type: string) => {
  if (type === "fornecedores") return EntryTypeEnum.PROVIDER;
  if (type === "veiculos") return EntryTypeEnum.VEHICLE;
  return null;
};
