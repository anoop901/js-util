import reduce from "./reduce";

export default function maxBy<T, U>(
  fn: (arg: T) => U
): (iterable: Iterable<T>) => T {
  return reduce<T>((a, b) => (fn(b) > fn(a) ? b : a));
}
