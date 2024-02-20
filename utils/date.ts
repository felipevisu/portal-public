import moment from "moment";

import "moment/locale/pt-br";

export function formatDate(dateString: string, format = "LL") {
  return moment.utc(dateString).format(format);
}

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export function toMonthName(monthNumber: number) {
  return months[monthNumber - 1];
}
