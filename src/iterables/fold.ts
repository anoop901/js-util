export default function fold<A, T>(initial: A, fn: (acc: A, x: T) => A) {
  return (iterable: Iterable<T>): A => {
    let result = initial;
    for (const t of iterable) {
      result = fn(result, t);
    }
    return result;
  };
}
