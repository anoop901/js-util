import chain from "../chain.ts";
import filter from "./filter.ts";
import first from "./first.ts";

export default function findFirstMatching<T>(pred: (arg: T) => boolean) {
  return (iterable: Iterable<T>): T | null =>
    chain(iterable).then(filter(pred)).then(first).end();
}
