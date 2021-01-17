import chain from "../chain.ts";
import drop from "./drop.ts";
import zip from "./zip.ts";

export default function pairs<T>(offset = 1) {
  return (iterable: Iterable<T>): Iterable<{ first: T; second: T }> =>
    chain(zip(iterable, drop<T>(offset)(iterable))).end();
}
