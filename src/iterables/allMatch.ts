import chain from "../chain";
import fold from "./fold";
import map from "./map";

export default function allMatch<T>(pred: (t: T) => boolean) {
  return (iterable: Iterable<T>): boolean => {
    return chain(iterable)
      .then(map(pred))
      .then(fold(true, (a, b) => a && b))
      .end();
  };
}
