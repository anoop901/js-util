import { assertEquals } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import slice from "./slice.ts";

Deno.test("basic", () => {
  assertEquals(
    Array.from(slice(2, 5)(["the", "quick", "brown", "fox", "jumps", "over"])),
    ["brown", "fox", "jumps"]
  );
});
Deno.test("infinite", () => {
  assertEquals(Array.from(slice(2, 5)(allIntegersStartingAt(10))), [
    12,
    13,
    14,
  ]);
});
Deno.test("end out of bounds", () => {
  assertEquals(Array.from(slice(2, 5)(["the", "quick", "brown", "fox"])), [
    "brown",
    "fox",
  ]);
});
Deno.test("start and end out of bounds", () => {
  assertEquals(Array.from(slice(5, 7)(["the", "quick", "brown", "fox"])), []);
});
Deno.test("start and end equal", () => {
  assertEquals(Array.from(slice(2, 2)(["the", "quick", "brown", "fox"])), []);
});
Deno.test("end before start", () => {
  assertEquals(Array.from(slice(2, 1)(["the", "quick", "brown", "fox"])), []);
});
