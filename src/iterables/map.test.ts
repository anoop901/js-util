import { assertEquals } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import map from "./map.ts";

Deno.test("basic", () => {
  const iter = map((x: number) => x * 10)([2, 5, 3]);
  assertEquals(Array.from(iter), [20, 50, 30]);
});
Deno.test("infinite", () => {
  const iter = map((x: number) => x * 10)(allIntegersStartingAt(5));
  assertEquals(iter.next(), { value: 50, done: false });
  assertEquals(iter.next(), { value: 60, done: false });
  assertEquals(iter.next(), { value: 70, done: false });
  assertEquals(iter.next(), { value: 80, done: false });
  assertEquals(iter.next(), { value: 90, done: false });
});
Deno.test("change type", () => {
  const iter = map((x: string) => x.length)(["the", "quick", "brown", "fox"]);
  assertEquals(Array.from(iter), [3, 5, 5, 3]);
});
