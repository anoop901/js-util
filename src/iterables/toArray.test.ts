import chain from "../chain.ts";
import { assertEquals } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import takeWhile from "./takeWhile.ts";
import toArray from "./toArray.ts";

Deno.test("basic", () => {
  assertEquals(toArray([3, 6, 5]), [3, 6, 5]);
});
Deno.test("from generator", () => {
  assertEquals(
    chain(allIntegersStartingAt(0))
      .then(takeWhile((x) => x < 4))
      .then(toArray)
      .end(),
    [0, 1, 2, 3]
  );
});
