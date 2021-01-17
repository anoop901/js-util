import chain from "../chain.ts";
import { assertEquals } from "../deps.ts";
import countMatching from "./countMatching.ts";

Deno.test("basic", () => {
  assertEquals(
    chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
      .then(countMatching((x) => x % 3 === 0))
      .end(),
    3
  );
});
Deno.test("none matching", () => {
  assertEquals(
    chain([1, 2, 4, 5, 7, 8, 10, 11])
      .then(countMatching((x) => x % 3 === 0))
      .end(),
    0
  );
});
Deno.test("all matching", () => {
  assertEquals(
    chain([3, 6, 9])
      .then(countMatching((x) => x % 3 === 0))
      .end(),
    3
  );
});
Deno.test("empty iterable", () => {
  assertEquals(
    chain([])
      .then(countMatching((x) => x % 3 === 0))
      .end(),
    0
  );
});
