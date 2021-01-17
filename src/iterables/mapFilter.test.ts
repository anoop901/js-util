import chain from "../chain.ts";
import { assertEquals } from "../deps.ts";
import mapFilter from "./mapFilter.ts";
import toArray from "./toArray.ts";

Deno.test("basic", () => {
  assertEquals(
    chain([
      { a: 3, b: "the" },
      { a: null, b: "quick" },
      { a: null, b: "brown" },
      { a: 5, b: "fox" },
    ])
      .then(mapFilter(({ a }) => a))
      .then(toArray)
      .end(),
    [3, 5]
  );
});
