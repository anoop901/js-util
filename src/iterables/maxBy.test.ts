import { assertEquals, assertThrows } from "../deps.ts";
import maxBy from "./maxBy.ts";

Deno.test("basic", () => {
  assertEquals(
    maxBy((x: string) => x.length)([
      "the",
      "quick",
      "brown",
      "fox",
      "jumps",
      "over",
      "an",
      "amazing",
      "dog",
    ]),
    "amazing"
  );
});
Deno.test("one element", () => {
  assertEquals(maxBy((x: string) => x.length)(["fox"]), "fox");
});
Deno.test("empty causes error", () => {
  assertThrows(() => maxBy((x: string) => x.length)([]));
});
