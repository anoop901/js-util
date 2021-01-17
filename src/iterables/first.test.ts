import { assertEquals } from "../deps.ts";
import first from "./first.ts";

Deno.test("basic", () => {
  assertEquals(first([11, 12, 13]), 11);
});
Deno.test("single element", () => {
  assertEquals(first([11]), 11);
});
Deno.test("empty", () => {
  assertEquals(first([]), null);
});
