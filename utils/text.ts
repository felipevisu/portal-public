export function capitalize(value: string): string {
  const arr = value.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  return arr.join(" ");
}

type ListItem = {
  id: string;
  name: string;
};

export function joinList(values: ListItem[]): string {
  return values.map((value) => value.name).join(", ");
}
