function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("/");
}
