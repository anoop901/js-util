import chain from "../chain.ts";
import { assertEquals } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import drop from "./drop.ts";
import toArray from "./toArray.ts";

Deno.test("basic", () => {
  assertEquals(
    chain(["the", "quick", "brown", "fox", "jumped"])
      .then(drop(2))
      .then(toArray)
      .end(),
    ["brown", "fox", "jumped"]
  );
});
Deno.test("drop no elements", () => {
  assertEquals(
    chain(["the", "quick", "brown", "fox", "jumped"])
      .then(drop(0))
      .then(toArray)
      .end(),
    ["the", "quick", "brown", "fox", "jumped"]
  );
});
Deno.test("drop one element", () => {
  assertEquals(
    chain(["the", "quick", "brown", "fox", "jumped"])
      .then(drop(1))
      .then(toArray)
      .end(),
    ["quick", "brown", "fox", "jumped"]
  );
});
Deno.test("drop all elements", () => {
  assertEquals(
    chain(["the", "quick", "brown", "fox", "jumped"])
      .then(drop(5))
      .then(toArray)
      .end(),
    []
  );
});
Deno.test("drop more than all elements", () => {
  assertEquals(
    chain(["the", "quick", "brown", "fox", "jumped"])
      .then(drop(7))
      .then(toArray)
      .end(),
    []
  );
});
Deno.test("infinite", () => {
  const iter = drop(3)(allIntegersStartingAt(0))[Symbol.iterator]();
  assertEquals(iter.next(), { value: 3, done: false });
  assertEquals(iter.next(), { value: 4, done: false });
  assertEquals(iter.next(), { value: 5, done: false });
});
