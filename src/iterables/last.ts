export default function last<T>(iterable: Iterable<T>): T | null {
  let result: T | null = null;
  for (const value of iterable) {
    result = value;
  }
  return result;
}
