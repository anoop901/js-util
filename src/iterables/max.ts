import maxBy from "./maxBy.ts";

export default function max<T>(iterable: Iterable<T>): T {
  return maxBy((x: T) => x)(iterable);
}
