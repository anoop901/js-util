import chain from "../chain.ts";
import { assertEquals } from "../deps.ts";
import repeatedlyApply from "./repeatedlyApply.ts";

Deno.test("basic", () => {
  const iterator = chain(10)
    .then(repeatedlyApply((x) => x * 2))
    .end();
  assertEquals(iterator.next(), { value: 10, done: false });
  assertEquals(iterator.next(), { value: 20, done: false });
  assertEquals(iterator.next(), { value: 40, done: false });
  assertEquals(iterator.next(), { value: 80, done: false });
  assertEquals(iterator.next(), { value: 160, done: false });
});
Deno.test("times 0", () => {
  const iterator = chain(10)
    .then(repeatedlyApply((x) => x * 0))
    .end();
  assertEquals(iterator.next(), { value: 10, done: false });
  assertEquals(iterator.next(), { value: 0, done: false });
  assertEquals(iterator.next(), { value: 0, done: false });
  assertEquals(iterator.next(), { value: 0, done: false });
  assertEquals(iterator.next(), { value: 0, done: false });
});
