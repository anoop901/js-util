export default function first<T>(iterable: Iterable<T>): T | null {
  for (const value of iterable) {
    return value;
  }
  return null;
}
