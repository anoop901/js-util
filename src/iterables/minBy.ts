import reduce from "./reduce.ts";

export default function minBy<T, U>(
  fn: (arg: T) => U
): (iterable: Iterable<T>) => T {
  return reduce<T>((a, b) => (fn(b) < fn(a) ? b : a));
}
