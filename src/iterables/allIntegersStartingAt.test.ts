import { assertEquals } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";

Deno.test("start at 0", () => {
  const iter = allIntegersStartingAt();
  assertEquals(iter.next(), { value: 0, done: false });
  assertEquals(iter.next(), { value: 1, done: false });
  assertEquals(iter.next(), { value: 2, done: false });
  assertEquals(iter.next(), { value: 3, done: false });
  assertEquals(iter.next(), { value: 4, done: false });
});
Deno.test("start at 123", () => {
  const iter = allIntegersStartingAt(123);
  assertEquals(iter.next(), { value: 123, done: false });
  assertEquals(iter.next(), { value: 124, done: false });
  assertEquals(iter.next(), { value: 125, done: false });
  assertEquals(iter.next(), { value: 126, done: false });
  assertEquals(iter.next(), { value: 127, done: false });
});
