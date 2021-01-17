import chain from "../chain.ts";
import fold from "./fold.ts";
import map from "./map.ts";

/**
 * Creates a function that checks if all values match a condition.
 *
 * @typeparam T The type of element in the iterable.
 * @param pred The condition to check the elements with.
 * @param pred.t The element to check.
 */
export default function allMatch<T>(pred: (t: T) => boolean) {
  /**
   * @param iterable The iterable whose elements to check.
   * @return Whether all elements in the iterable match the condition.
   */
  return (iterable: Iterable<T>): boolean => {
    return chain(iterable)
      .then(map(pred))
      .then(fold(true, (a, b) => a && b))
      .end();
  };
}
