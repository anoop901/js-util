import { assertEquals } from "../deps.ts";
import itemAtIndex from "./itemAtIndex.ts";

Deno.test("basic", () => {
  assertEquals(
    itemAtIndex(2)(["the", "quick", "brown", "fox", "jumps", "over"]),
    "brown"
  );
});
Deno.test("index 0", () => {
  assertEquals(
    itemAtIndex(0)(["the", "quick", "brown", "fox", "jumps", "over"]),
    "the"
  );
});
Deno.test("last index", () => {
  assertEquals(
    itemAtIndex(5)(["the", "quick", "brown", "fox", "jumps", "over"]),
    "over"
  );
});
Deno.test("out of bounds", () => {
  assertEquals(
    itemAtIndex(8)(["the", "quick", "brown", "fox", "jumps", "over"]),
    null
  );
});
