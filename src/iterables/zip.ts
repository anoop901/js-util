export default function* zip<T, U>(
  firstIterable: Iterable<T>,
  secondIterable: Iterable<U>
): Generator<{ first: T; second: U }> {
  const firstIterator = firstIterable[Symbol.iterator]();
  const secondIterator = secondIterable[Symbol.iterator]();
  while (true) {
    const { done: firstDone, value: first } = firstIterator.next();
    const { done: secondDone, value: second } = secondIterator.next();
    if (!firstDone && !secondDone) {
      yield { first, second };
    } else {
      break;
    }
  }
}
