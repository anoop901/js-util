import chain from "../chain";
import filter from "./filter";
import length from "./length";

export default function countMatching<T>(pred: (value: T) => boolean) {
  return function (iterable: Iterable<T>): number {
    return chain(iterable).then(filter(pred)).then(length).end();
  };
}
