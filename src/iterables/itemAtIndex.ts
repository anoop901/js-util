export default function itemAtIndex<T>(index: number) {
  return (iterable: Iterable<T>): T | null => {
    let i = 0;
    for (const t of iterable) {
      if (i == index) {
        return t;
      }
      i++;
    }
    return null;
  };
}
