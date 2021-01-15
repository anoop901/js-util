export default function map<T, U>(fn: (arg: T) => U) {
  return function* (iterable: Iterable<T>): Generator<U> {
    for (const t of iterable) {
      yield fn(t);
    }
  };
}
