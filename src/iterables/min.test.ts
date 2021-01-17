import { assertEquals, assertThrows } from "../deps.ts";
import min from "./min.ts";

Deno.test("basic", () => {
  assertEquals(min([3, 1, 5, 8, 3]), 1);
});
Deno.test("one element", () => {
  assertEquals(min([5]), 5);
});
Deno.test("empty causes error", () => {
  assertThrows(() => min([]));
});
