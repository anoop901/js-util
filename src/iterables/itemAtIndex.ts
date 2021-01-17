import chain from "../chain.ts";
import drop from "./drop.ts";
import first from "./first.ts";

export default function itemAtIndex<T>(index: number) {
  return (iterable: Iterable<T>): T | null => {
    return chain(iterable).then(drop(index)).then(first).end();
  };
}
