import { assertEquals } from "../deps.ts";
import filterNonNullish from "./filterNonNullish.ts";

Deno.test("iterable containing some nulls", () => {
  const iter = filterNonNullish([6, 11, null, 28, null]);
  assertEquals(Array.from(iter), [6, 11, 28]);
});
Deno.test("iterable containing some undefineds", () => {
  const iter = filterNonNullish([6, 11, undefined, 28, undefined]);
  assertEquals(Array.from(iter), [6, 11, 28]);
});
Deno.test("iterable containing some nulls and undefineds", () => {
  const iter = filterNonNullish([6, 11, undefined, 28, null]);
  assertEquals(Array.from(iter), [6, 11, 28]);
});
Deno.test("all not nullish", () => {
  const iter = filterNonNullish([6, 11, 28]);
  assertEquals(Array.from(iter), [6, 11, 28]);
});
Deno.test("all nullish", () => {
  const iter = filterNonNullish([null, null, null]);
  assertEquals(Array.from(iter), []);
});
