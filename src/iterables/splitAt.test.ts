import { assertEquals } from "../deps.ts";
import splitAt from "./splitAt.ts";

Deno.test("complete before, then complete after", () => {
  const { before, after } = splitAt(3)(
    ["the", "quick", "brown", "fox", "jumps"][Symbol.iterator]()
  );
  assertEquals(before.next(), { value: "the", done: false });
  assertEquals(before.next(), { value: "quick", done: false });
  assertEquals(before.next(), { value: "brown", done: false });
  assertEquals(before.next(), { value: undefined, done: true });
  assertEquals(after.next(), { value: "fox", done: false });
  assertEquals(after.next(), { value: "jumps", done: false });
  assertEquals(after.next(), { value: undefined, done: true });
});
Deno.test("complete after, then complete before", () => {
  const { before, after } = splitAt(3)(
    ["the", "quick", "brown", "fox", "jumps"][Symbol.iterator]()
  );
  assertEquals(after.next(), { value: "fox", done: false });
  assertEquals(after.next(), { value: "jumps", done: false });
  assertEquals(after.next(), { value: undefined, done: true });
  assertEquals(before.next(), { value: "the", done: false });
  assertEquals(before.next(), { value: "quick", done: false });
  assertEquals(before.next(), { value: "brown", done: false });
  assertEquals(before.next(), { value: undefined, done: true });
});
Deno.test("interleave iterators, before first", () => {
  const { before, after } = splitAt(3)(
    ["the", "quick", "brown", "fox", "jumps"][Symbol.iterator]()
  );
  assertEquals(before.next(), { value: "the", done: false });
  assertEquals(after.next(), { value: "fox", done: false });
  assertEquals(before.next(), { value: "quick", done: false });
  assertEquals(before.next(), { value: "brown", done: false });
  assertEquals(before.next(), { value: undefined, done: true });
  assertEquals(after.next(), { value: "jumps", done: false });
  assertEquals(after.next(), { value: undefined, done: true });
});
Deno.test("interleave iterators, after first", () => {
  const { before, after } = splitAt(3)(
    ["the", "quick", "brown", "fox", "jumps"][Symbol.iterator]()
  );
  assertEquals(after.next(), { value: "fox", done: false });
  assertEquals(before.next(), { value: "the", done: false });
  assertEquals(before.next(), { value: "quick", done: false });
  assertEquals(after.next(), { value: "jumps", done: false });
  assertEquals(after.next(), { value: undefined, done: true });
  assertEquals(before.next(), { value: "brown", done: false });
  assertEquals(before.next(), { value: undefined, done: true });
});
