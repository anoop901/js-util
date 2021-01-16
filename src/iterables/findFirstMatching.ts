import chain from "../chain";
import filter from "./filter";
import first from "./first";

export default function findFirstMatching<T>(pred: (arg: T) => boolean) {
  return (iterable: Iterable<T>): T | null =>
    chain(iterable).then(filter(pred)).then(first).end();
}
