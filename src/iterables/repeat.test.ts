import chain from "../chain.ts";
import { assertEquals } from "../deps.ts";
import repeat from "./repeat.ts";
import toArray from "./toArray.ts";

Deno.test("basic", () => {
  assertEquals(chain(repeat("buffalo", 3)).then(toArray).end(), [
    "buffalo",
    "buffalo",
    "buffalo",
  ]);
});
Deno.test("0 times", () => {
  assertEquals(chain(repeat("buffalo", 0)).then(toArray).end(), []);
});
Deno.test("infinite", () => {
  const iter = repeat("buffalo")[Symbol.iterator]();
  assertEquals(iter.next(), { value: "buffalo", done: false });
  assertEquals(iter.next(), { value: "buffalo", done: false });
  assertEquals(iter.next(), { value: "buffalo", done: false });
  assertEquals(iter.next(), { value: "buffalo", done: false });
  assertEquals(iter.next(), { value: "buffalo", done: false });
});
