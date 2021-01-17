import { assertEquals } from "../deps.ts";
import filter from "./filter.ts";

Deno.test("basic", () => {
  const iter = filter((x: number) => x % 10 === 0)([6, 11, 50, 28, 80]);
  assertEquals(Array.from(iter), [50, 80]);
});
Deno.test("all match", () => {
  const iter = filter((x: number) => x % 10 === 0)([50, 80, 70]);
  assertEquals(Array.from(iter), [50, 80, 70]);
});
Deno.test("none match", () => {
  const iter = filter((x: number) => x % 10 === 0)([6, 11, 28]);
  assertEquals(Array.from(iter), []);
});
