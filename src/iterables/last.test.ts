import { assertEquals } from "../deps.ts";
import last from "./last.ts";

Deno.test("basic", () => {
  assertEquals(last([11, 12, 13]), 13);
});
Deno.test("single element", () => {
  assertEquals(last([11]), 11);
});
Deno.test("empty", () => {
  assertEquals(last([]), null);
});
