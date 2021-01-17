import chain from "../chain.ts";
import { assertEquals } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import takeWhile from "./takeWhile.ts";
import length from "./length.ts";

Deno.test("basic", () => {
  assertEquals(length([3, 5, 2]), 3);
});
Deno.test("empty", () => {
  assertEquals(length([]), 0);
});
Deno.test("from generator", () => {
  assertEquals(
    chain(allIntegersStartingAt(0))
      .then(takeWhile((x) => x < 4))
      .then(length)
      .end(),
    4
  );
});
