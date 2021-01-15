export default function reduce<T>(fn: (a: T, b: T) => T) {
  return (iterable: Iterable<T>): T => {
    const iterator = iterable[Symbol.iterator]();
    const firstIteratorResult = iterator.next();
    if (firstIteratorResult.done) {
      throw new Error("cannot reduce empty iterable");
    }

    let result = firstIteratorResult.value;
    let { value, done } = iterator.next();
    while (!done) {
      result = fn(result, value);
      ({ value, done } = iterator.next());
    }
    return result;
  };
}
