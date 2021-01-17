import chain from "../chain.ts";
import { assert } from "../deps.ts";
import anyMatch from "./anyMatch.ts";

Deno.test("all match", () => {
  assert(
    chain([3, 6, 2, 6])
      .then(anyMatch((x) => x < 10))
      .end()
  );
});
Deno.test("mixed", () => {
  assert(
    chain([3, 6, 12, 6])
      .then(anyMatch((x) => x < 10))
      .end()
  );
});
Deno.test("none match", () => {
  assert(
    !chain([13, 16, 12, 16])
      .then(anyMatch<number>((x) => x < 10))
      .end()
  );
});
Deno.test("empty", () => {
  assert(
    !chain([])
      .then(anyMatch((x) => x < 10))
      .end()
  );
});
