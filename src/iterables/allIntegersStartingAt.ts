import chain from "../chain";
import repeatedlyApply from "./repeatedlyApply";

export default function allIntegersStartingAt(start = 0): Generator<number> {
  return chain(start)
    .then(repeatedlyApply((x: number) => x + 1))
    .end();
}
