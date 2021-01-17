import { assertEquals } from "../deps.ts";
import pairs from "./pairs.ts";

Deno.test("basic", () => {
  assertEquals(Array.from(pairs()(["the", "quick", "brown", "fox", "jumps"])), [
    { first: "the", second: "quick" },
    { first: "quick", second: "brown" },
    { first: "brown", second: "fox" },
    { first: "fox", second: "jumps" },
  ]);
});
Deno.test("offset 2", () => {
  assertEquals(
    Array.from(pairs(2)(["the", "quick", "brown", "fox", "jumps"])),
    [
      { first: "the", second: "brown" },
      { first: "quick", second: "fox" },
      { first: "brown", second: "jumps" },
    ]
  );
});
Deno.test("empty iterable", () => {
  assertEquals(Array.from(pairs()([])), []);
});
Deno.test("one item in iterable", () => {
  assertEquals(Array.from(pairs()(["one"])), []);
});
