import chain from "../chain";
import drop from "./drop";
import take from "./take";

export default function slice<T>(start: number, end: number) {
  return (iterable: Iterable<T>): Iterable<T> =>
    chain(iterable)
      .then(drop(start))
      .then(take(end - start))
      .end();
}
