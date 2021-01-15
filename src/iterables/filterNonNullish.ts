export default function* filterNonNullish<T>(
  iterable: Iterable<T | null | undefined>
): Generator<T> {
  for (const t of iterable) {
    if (t != null) {
      yield t;
    }
  }
}
