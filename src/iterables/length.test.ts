import chain from "../chain.ts";
import { Rhum } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import takeWhile from "./takeWhile.ts";
import length from "./length.ts";

Rhum.testPlan("length.test.ts", () => {
  Rhum.testSuite("length", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(length([3, 5, 2]), 3);
    });
    Rhum.testCase("empty", () => {
      Rhum.asserts.assertEquals(length([]), 0);
    });
    Rhum.testCase("from generator", () => {
      Rhum.asserts.assertEquals(
        chain(allIntegersStartingAt(0))
          .then(takeWhile((x) => x < 4))
          .then(length)
          .end(),
        4
      );
    });
  });
});

Rhum.run()

