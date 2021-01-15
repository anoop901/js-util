export default function splitAt<T>(splitIndex: number) {
  return (
    iterator: Iterator<T>
  ): { before: Iterator<T>; after: Iterator<T> } => {
    let beforeBuffer: T[] | null = null;
    let currentIndexBefore = 0;

    const before: Iterator<T> = {
      next(): IteratorResult<T> {
        if (currentIndexBefore < splitIndex) {
          // TODO get from buffer if present
          currentIndexBefore++;
          if (beforeBuffer !== null) {
            const value = beforeBuffer.shift();
            if (value === undefined) {
              throw new Error("unreachable");
            }
            return { value, done: false };
          } else {
            return iterator.next();
          }
        } else {
          return { done: true, value: undefined };
        }
      },
    };
    const after: Iterator<T> = {
      next(): IteratorResult<T> {
        if (currentIndexBefore < splitIndex && beforeBuffer === null) {
          beforeBuffer = [];
          for (let index = currentIndexBefore; index < splitIndex; index++) {
            const { value, done } = iterator.next();
            if (!done) {
              beforeBuffer.push(value);
            } else {
              throw new Error("the iterable was shorter than the split index");
            }
          }
        }
        return iterator.next();
      },
    };
    return { before, after };
  };
}
