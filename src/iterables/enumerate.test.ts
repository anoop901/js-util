import { assertEquals } from "../deps.ts";
import enumerate from "./enumerate.ts";

Deno.test("basic", () => {
  assertEquals(Array.from(enumerate(["the", "quick", "brown", "fox"])), [
    { index: 0, value: "the" },
    { index: 1, value: "quick" },
    { index: 2, value: "brown" },
    { index: 3, value: "fox" },
  ]);
});
