import chain from "../chain";
import drop from "./drop";
import zip from "./zip";

export default function pairs<T>(offset = 1) {
  return (iterable: Iterable<T>): Iterable<{ first: T; second: T }> =>
    chain(zip(iterable, drop<T>(offset)(iterable))).end();
}
