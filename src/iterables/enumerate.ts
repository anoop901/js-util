import chain from "../chain.ts";
import zip from "./zip.ts";
import map from "./map.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";

export default function enumerate<T>(
  iterable: Iterable<T>
): Iterable<{ index: number; value: T }> {
  return chain(zip(iterable, allIntegersStartingAt()))
    .then(map(({ first, second }) => ({ index: second, value: first })))
    .end();
}
