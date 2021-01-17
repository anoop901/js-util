import minBy from "./minBy.ts";

export default function min<T>(iterable: Iterable<T>): T {
  return minBy((x: T) => x)(iterable);
}
