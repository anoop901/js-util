import { assertEquals } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import zip from "./zip.ts";

Deno.test("same size", () => {
  assertEquals(
    Array.from(zip([111, 22222, 33333, 444], ["the", "quick", "brown", "fox"])),
    [
      { first: 111, second: "the" },
      { first: 22222, second: "quick" },
      { first: 33333, second: "brown" },
      { first: 444, second: "fox" },
    ]
  );
});
Deno.test("different sizes (bigger, smaller)", () => {
  assertEquals(
    Array.from(
      zip([111, 22222, 33333, 444, 5, 6], ["the", "quick", "brown", "fox"])
    ),
    [
      { first: 111, second: "the" },
      { first: 22222, second: "quick" },
      { first: 33333, second: "brown" },
      { first: 444, second: "fox" },
    ]
  );
});
Deno.test("different sizes (smaller, bigger)", () => {
  assertEquals(
    Array.from(zip([111, 22222], ["the", "quick", "brown", "fox"])),
    [
      { first: 111, second: "the" },
      { first: 22222, second: "quick" },
    ]
  );
});
Deno.test("first empty", () => {
  assertEquals(Array.from(zip([], ["the", "quick", "brown", "fox"])), []);
});
Deno.test("second empty", () => {
  assertEquals(Array.from(zip([1, 2, 3, 4], [])), []);
});
Deno.test("both empty", () => {
  assertEquals(Array.from(zip([], [])), []);
});
Deno.test("one infinite", () => {
  assertEquals(
    Array.from(zip(allIntegersStartingAt(0), ["the", "quick", "brown", "fox"])),
    [
      { first: 0, second: "the" },
      { first: 1, second: "quick" },
      { first: 2, second: "brown" },
      { first: 3, second: "fox" },
    ]
  );
});
