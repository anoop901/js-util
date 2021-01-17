import chain from "../chain.ts";
import { Rhum } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import take from "./take.ts";
import toArray from "./toArray.ts";

Rhum.testPlan("take.test.ts", () => {
  Rhum.testSuite("take", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(
        chain(["the", "quick", "brown", "fox", "jumped"])
          .then(take(2))
          .then(toArray)
          .end(),
        ["the", "quick"]
      );
    });
    Rhum.testCase("take no elements", () => {
      Rhum.asserts.assertEquals(
        chain(["the", "quick", "brown", "fox", "jumped"])
          .then(take(0))
          .then(toArray)
          .end(),
        []
      );
    });
    Rhum.testCase("take one element", () => {
      Rhum.asserts.assertEquals(
        chain(["the", "quick", "brown", "fox", "jumped"])
          .then(take(1))
          .then(toArray)
          .end(),
        ["the"]
      );
    });
    Rhum.testCase("take all elements", () => {
      Rhum.asserts.assertEquals(
        chain(["the", "quick", "brown", "fox", "jumped"])
          .then(take(5))
          .then(toArray)
          .end(),
        ["the", "quick", "brown", "fox", "jumped"]
      );
    });
    Rhum.testCase("take more than all elements", () => {
      Rhum.asserts.assertEquals(
        chain(["the", "quick", "brown", "fox", "jumped"])
          .then(take(7))
          .then(toArray)
          .end(),
        ["the", "quick", "brown", "fox", "jumped"]
      );
    });
    Rhum.testCase("infinite", () => {
      Rhum.asserts.assertEquals(
        chain(allIntegersStartingAt(0)).then(take(3)).then(toArray).end(),
        [0, 1, 2]
      );
    });
  });
});

Rhum.run()

