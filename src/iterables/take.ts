export default function take<T>(n: number) {
  return function* (iterable: Iterable<T>): Generator<T> {
    const iter = iterable[Symbol.iterator]();
    for (let i = 0; i < n; i++) {
      const iterResult = iter.next();
      if (iterResult.done) {
        break;
      }
      yield iterResult.value;
    }
  };
}
