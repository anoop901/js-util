export default function split<T>(separator: T) {
  return function* (iterable: Iterable<T>): Generator<T[]> {
    let currentChunk: T[] | null = null;
    for (const value of iterable) {
      if (value === separator) {
        if (currentChunk !== null) {
          yield currentChunk;
          currentChunk = null;
        }
      } else {
        if (currentChunk === null) {
          currentChunk = [];
        }
        currentChunk.push(value);
      }
    }
    if (currentChunk !== null) {
      yield currentChunk;
    }
  };
}
