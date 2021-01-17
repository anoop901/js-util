import { assertThrows } from "../deps.ts";
import throwError from "./throwError.ts";

Deno.test("throws error", () => {
  assertThrows(() => throwError("foo"), Error, "foo");
});
