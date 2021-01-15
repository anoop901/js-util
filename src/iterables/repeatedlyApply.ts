export default function repeatedlyApply<T>(fn: (arg: T) => T) {
  return function* (initialValue: T): Generator<T, void, undefined> {
    let currentValue = initialValue;
    while (true) {
      yield currentValue;
      currentValue = fn(currentValue);
    }
  };
}
