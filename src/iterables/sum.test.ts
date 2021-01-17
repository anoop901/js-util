import { assertEquals } from "../deps.ts";
import sum from "./sum.ts";

Deno.test("basic", () => {
  assertEquals(sum([5, 2, 9]), 16);
});
