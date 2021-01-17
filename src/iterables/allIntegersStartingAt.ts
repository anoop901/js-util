import chain from "../chain.ts";
import repeatedlyApply from "./repeatedlyApply.ts";

export default function allIntegersStartingAt(start = 0): Generator<number> {
  return chain(start)
    .then(repeatedlyApply((x: number) => x + 1))
    .end();
}
