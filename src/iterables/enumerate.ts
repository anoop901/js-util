import chain from "../chain";
import zip from "./zip";
import map from "./map";
import allIntegersStartingAt from "./allIntegersStartingAt";

export default function enumerate<T>(
  iterable: Iterable<T>
): Iterable<{ index: number; value: T }> {
  return chain(zip(iterable, allIntegersStartingAt()))
    .then(map(({ first, second }) => ({ index: second, value: first })))
    .end();
}
