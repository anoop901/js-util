import { assertEquals } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import takeWhile from "./takeWhile.ts";

Deno.test("basic", () => {
  const iter = takeWhile((x: number) => x % 10 !== 0)([6, 11, 50, 28, 80]);
  assertEquals(Array.from(iter), [6, 11]);
});
Deno.test("take entire iterable", () => {
  const iter = takeWhile((x: number) => x % 10 !== 0)([6, 11, 28]);
  assertEquals(Array.from(iter), [6, 11, 28]);
});
Deno.test("infinite", () => {
  const iter = takeWhile((x: number) => x % 10 !== 0)(
    allIntegersStartingAt(127)
  );
  assertEquals(Array.from(iter), [127, 128, 129]);
});
