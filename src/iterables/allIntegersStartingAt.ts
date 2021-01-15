export default function* allIntegersStartingAt(start = 0): Generator<number> {
  for (let n = start; true; n++) {
    yield n;
  }
}
