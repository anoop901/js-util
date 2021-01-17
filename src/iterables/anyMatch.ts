import chain from "../chain.ts";
import fold from "./fold.ts";
import map from "./map.ts";

export default function anyMatch<T>(pred: (t: T) => boolean) {
  return (iterable: Iterable<T>): boolean => {
    return chain(iterable)
      .then(map(pred))
      .then(fold(false, (a, b) => a || b))
      .end();
  };
}
