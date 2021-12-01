import chain from "../chain";
import drop from "./drop";
import zip from "./zip";

export default function pairs<T>(offset = 1) {
  return function* (iterable: Iterable<T>): Generator<{ first: T; second: T }> {
    const pastValues = [];
    let index = 0;
    for (const x of iterable) {
      if (pastValues.length < offset) {
        pastValues.push(x);
      } else {
        yield { first: pastValues[index % offset], second: x };
        pastValues[index % offset] = x;
      }
      index++;
    }
  };
}
