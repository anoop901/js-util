import chain from "../chain.ts";
import filter from "./filter.ts";
import length from "./length.ts";

export default function countMatching<T>(pred: (value: T) => boolean) {
  return function (iterable: Iterable<T>): number {
    return chain(iterable).then(filter(pred)).then(length).end();
  };
}
