import { assertThrows } from "../deps.ts";
import assertNotNullish from "./assertNotNullish.ts";

Deno.test("null argument", () => {
  assertThrows(() => assertNotNullish(null));
});
Deno.test("undefined argument", () => {
  assertThrows(() => assertNotNullish(undefined));
});
Deno.test("number argument", () => {
  assertNotNullish(123); // This should not throw.
});
