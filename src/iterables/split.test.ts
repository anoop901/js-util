import { assertEquals } from "../deps.ts";
import split from "./split.ts";

Deno.test("basic", () => {
  assertEquals(Array.from(split(0)([3, 4, 5, 0, 6, 7, 0, 8])), [
    [3, 4, 5],
    [6, 7],
    [8],
  ]);
});
Deno.test("multiple consecutive separators", () => {
  assertEquals(Array.from(split(0)([3, 4, 5, 0, 0, 6, 7, 0, 8])), [
    [3, 4, 5],
    [6, 7],
    [8],
  ]);
});
Deno.test("separators only", () => {
  assertEquals(Array.from(split(0)([0, 0, 0])), []);
});
Deno.test("empty list", () => {
  assertEquals(Array.from(split(0)([])), []);
});
Deno.test("only one chunk", () => {
  assertEquals(Array.from(split(0)([3, 4])), [[3, 4]]);
});
Deno.test("chunks have only one element", () => {
  assertEquals(Array.from(split(0)([3, 0, 4])), [[3], [4]]);
});
Deno.test("separator at beginning", () => {
  assertEquals(Array.from(split(0)([0, 3, 4])), [[3, 4]]);
});
Deno.test("separator at end", () => {
  assertEquals(Array.from(split(0)([3, 4, 0])), [[3, 4]]);
});
