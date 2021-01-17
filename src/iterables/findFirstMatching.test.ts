import { assertEquals } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import findFirstMatching from "./findFirstMatching.ts";

Deno.test("basic", () => {
  assertEquals(
    findFirstMatching((x: number) => x % 10 === 0)([6, 11, 50, 28, 80]),
    50
  );
});
Deno.test("match at beginning", () => {
  assertEquals(
    findFirstMatching((x: number) => x % 10 === 0)([40, 6, 11, 50, 28, 80]),
    40
  );
});
Deno.test("no match", () => {
  assertEquals(
    findFirstMatching((x: number) => x % 10 === 0)([6, 11, 28]),
    null
  );
});
Deno.test("infinite", () => {
  assertEquals(
    findFirstMatching((x: number) => x % 10 === 0)(allIntegersStartingAt(123)),
    130
  );
});
