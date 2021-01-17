import chain from "../chain.ts";
import { assertEquals } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import take from "./take.ts";
import toArray from "./toArray.ts";

Deno.test("basic", () => {
  assertEquals(
    chain(["the", "quick", "brown", "fox", "jumped"])
      .then(take(2))
      .then(toArray)
      .end(),
    ["the", "quick"]
  );
});
Deno.test("take no elements", () => {
  assertEquals(
    chain(["the", "quick", "brown", "fox", "jumped"])
      .then(take(0))
      .then(toArray)
      .end(),
    []
  );
});
Deno.test("take one element", () => {
  assertEquals(
    chain(["the", "quick", "brown", "fox", "jumped"])
      .then(take(1))
      .then(toArray)
      .end(),
    ["the"]
  );
});
Deno.test("take all elements", () => {
  assertEquals(
    chain(["the", "quick", "brown", "fox", "jumped"])
      .then(take(5))
      .then(toArray)
      .end(),
    ["the", "quick", "brown", "fox", "jumped"]
  );
});
Deno.test("take more than all elements", () => {
  assertEquals(
    chain(["the", "quick", "brown", "fox", "jumped"])
      .then(take(7))
      .then(toArray)
      .end(),
    ["the", "quick", "brown", "fox", "jumped"]
  );
});
Deno.test("infinite", () => {
  assertEquals(
    chain(allIntegersStartingAt(0)).then(take(3)).then(toArray).end(),
    [0, 1, 2]
  );
});
