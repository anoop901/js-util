import { chain } from "..";
import fold from "./fold";
import map from "./map";

export default function anyMatch<T>(pred: (t: T) => boolean) {
  return (iterable: Iterable<T>): boolean => {
    return chain(iterable)
      .then(map(pred))
      .then(fold(false, (a, b) => a || b))
      .end();
  };
}
