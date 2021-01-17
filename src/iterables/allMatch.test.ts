import chain from "../chain.ts";
import { assert } from "../deps.ts";
import allMatch from "./allMatch.ts";

Deno.test("all match", () => {
  assert(
    chain([3, 6, 2, 6])
      .then(allMatch((x) => x < 10))
      .end()
  );
});
Deno.test("mixed", () => {
  assert(
    !chain([3, 6, 12, 6])
      .then(allMatch((x) => x < 10))
      .end()
  );
});
Deno.test("none match", () => {
  assert(
    !chain([13, 16, 12, 16])
      .then(allMatch((x) => x < 10))
      .end()
  );
});
Deno.test("empty", () => {
  assert(
    chain([])
      .then(allMatch((x) => x < 10))
      .end()
  );
});
