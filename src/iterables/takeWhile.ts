export default function takeWhile<T>(pred: (arg: T) => boolean) {
  return function* (iterable: Iterable<T>): Generator<T> {
    for (const t of iterable) {
      if (!pred(t)) {
        break;
      }
      yield t;
    }
  };
}
