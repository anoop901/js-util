import { assertEquals, assertThrows } from "../deps.ts";
import reduce from "./reduce.ts";

Deno.test("basic", () => {
  assertEquals(
    reduce((a, b) => a + ":" + b)(["the", "quick", "brown", "fox"]),
    "the:quick:brown:fox"
  );
});
Deno.test("one element", () => {
  assertEquals(reduce((a, b) => a + ":" + b)(["fox"]), "fox");
});
Deno.test("empty causes error", () => {
  assertThrows(() => reduce((a, b) => a + ":" + b)([]));
});
