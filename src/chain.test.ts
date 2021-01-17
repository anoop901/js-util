import chain from "./chain.ts";
import { assertEquals } from "./deps.ts";

Deno.test("single transformation", () => {
  assertEquals(
    chain(5)
      .then((x) => x * 2)
      .end(),
    10
  );
});

Deno.test("multiple transformation", () => {
  assertEquals(
    chain(5)
      .then((x) => x * 2)
      .then((x) => x + 8)
      .then((x) => x * 10)
      .end(),
    180
  );
});

Deno.test("transformation into different type", () => {
  assertEquals(
    chain("hello")
      .then((x) => x.length)
      .end(),
    5
  );
});

Deno.test("multiple transformations into different types", () => {
  assertEquals(
    chain("hello")
      .then((x) => x.length)
      .then((x) => `there are ${x} letters`)
      .end(),
    "there are 5 letters"
  );
});
