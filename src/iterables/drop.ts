export default function drop<T>(n: number) {
  return function* (iterable: Iterable<T>): Generator<T> {
    const iter = iterable[Symbol.iterator]();
    for (let i = 0; i < n; i++) {
      iter.next();
    }
    let { value, done } = iter.next();
    while (!done) {
      yield value;
      ({ value, done } = iter.next());
    }
  };
}
