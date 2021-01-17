import chain from "../chain.ts";
import drop from "./drop.ts";
import take from "./take.ts";

export default function slice<T>(start: number, end: number) {
  return (iterable: Iterable<T>): Iterable<T> =>
    chain(iterable)
      .then(drop(start))
      .then(take(end - start))
      .end();
}
