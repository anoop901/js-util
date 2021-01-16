import chain from "../chain";
import drop from "./drop";
import first from "./first";

export default function itemAtIndex<T>(index: number) {
  return (iterable: Iterable<T>): T | null => {
    return chain(iterable).then(drop(index)).then(first).end();
  };
}
