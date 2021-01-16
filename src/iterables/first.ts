/**
 * Gets the first element of an iterable, if it is not empty.
 *
 * @typeparam T The type of element in the iterable.
 * @param iterable The iterable.
 * @return The first element of `iterable`, or `null` if the iterable is empty.
 */
export default function first<T>(iterable: Iterable<T>): T | null {
  for (const value of iterable) {
    return value;
  }
  return null;
}
