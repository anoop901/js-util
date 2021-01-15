export default function mapFilter<T, U>(fn: (arg: T) => U | null | undefined) {
  return function* (iterable: Iterable<T>): Generator<U> {
    for (const t of iterable) {
      const u = fn(t);
      if (u) {
        yield u;
      }
    }
  };
}
