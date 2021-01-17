import chain from "../chain.ts";
import { Rhum } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import drop from "./drop.ts";
import toArray from "./toArray.ts";

Rhum.testPlan("drop.test.ts", () => {
  Rhum.testSuite("drop", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(
        chain(["the", "quick", "brown", "fox", "jumped"])
          .then(drop(2))
          .then(toArray)
          .end(),
        ["brown", "fox", "jumped"]
      );
    });
    Rhum.testCase("drop no elements", () => {
      Rhum.asserts.assertEquals(
        chain(["the", "quick", "brown", "fox", "jumped"])
          .then(drop(0))
          .then(toArray)
          .end(),
        ["the", "quick", "brown", "fox", "jumped"]
      );
    });
    Rhum.testCase("drop one element", () => {
      Rhum.asserts.assertEquals(
        chain(["the", "quick", "brown", "fox", "jumped"])
          .then(drop(1))
          .then(toArray)
          .end(),
        ["quick", "brown", "fox", "jumped"]
      );
    });
    Rhum.testCase("drop all elements", () => {
      Rhum.asserts.assertEquals(
        chain(["the", "quick", "brown", "fox", "jumped"])
          .then(drop(5))
          .then(toArray)
          .end(),
        []
      );
    });
    Rhum.testCase("drop more than all elements", () => {
      Rhum.asserts.assertEquals(
        chain(["the", "quick", "brown", "fox", "jumped"])
          .then(drop(7))
          .then(toArray)
          .end(),
        []
      );
    });
    Rhum.testCase("infinite", () => {
      const iter = drop(3)(allIntegersStartingAt(0))[Symbol.iterator]();
      Rhum.asserts.assertEquals(iter.next(), { value: 3, done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: 4, done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: 5, done: false });
    });
  });
});

Rhum.run()

