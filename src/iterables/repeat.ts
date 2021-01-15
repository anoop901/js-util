export default function* repeat<T>(
  value: T,
  count: number | null = null
): Generator<T> {
  if (count != null) {
    for (let i = 0; i < count; i++) {
      yield value;
    }
  } else {
    while (true) {
      yield value;
    }
  }
}
