import chain from "../chain.ts";
import { Rhum } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import takeWhile from "./takeWhile.ts";
import toArray from "./toArray.ts";

Rhum.testPlan("toArray.test.ts", () => {
  Rhum.testSuite("toArray", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(toArray([3, 6, 5]), [3, 6, 5]);
    });
    Rhum.testCase("from generator", () => {
      Rhum.asserts.assertEquals(
        chain(allIntegersStartingAt(0))
          .then(takeWhile((x) => x < 4))
          .then(toArray)
          .end(),
        [0, 1, 2, 3]
      );
    });
  });
});

Rhum.run()

