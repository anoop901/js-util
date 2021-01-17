import maxBy from "./maxBy";

export default function max<T>(iterable: Iterable<T>): T {
  return maxBy((x: T) => x)(iterable);
}
