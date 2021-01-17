import { assertEquals, assertThrows } from "../deps.ts";
import minBy from "./minBy.ts";

Deno.test("basic", () => {
  assertEquals(
    minBy((x: string) => x.length)([
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
    "an"
  );
});
Deno.test("one element", () => {
  assertEquals(minBy((x: string) => x.length)(["fox"]), "fox");
});
Deno.test("empty causes error", () => {
  assertThrows(() => minBy((x: string) => x.length)([]));
});
