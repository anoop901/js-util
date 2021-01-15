export default function length<T>(iterable: Iterable<T>): number {
  let result = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const _ of iterable) {
    result++;
  }
  return result;
}
