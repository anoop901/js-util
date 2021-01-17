import { assertEquals, assertThrows } from "../deps.ts";
import max from "./max.ts";

Deno.test("basic", () => {
  assertEquals(max([3, 1, 5, 8, 3]), 8);
});
Deno.test("one element", () => {
  assertEquals(max([5]), 5);
});
Deno.test("empty causes error", () => {
  assertThrows(() => max([]));
});
