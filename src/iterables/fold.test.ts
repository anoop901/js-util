import { assertEquals } from "../deps.ts";
import fold from "./fold.ts";

Deno.test("basic", () => {
  assertEquals(fold(0, (acc, x: number) => acc + x)([5, 2, 9]), 16);
});
Deno.test("different accumulator type", () => {
  assertEquals(
    fold(":", (acc, x: number) => acc + x.toString() + ":")([5, 2, 9]),
    ":5:2:9:"
  );
});
