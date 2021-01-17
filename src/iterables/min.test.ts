import { Rhum, assertThrows } from "../deps.ts";
import min from "./min.ts";

Rhum.testPlan("min.test.ts", () => {
  Rhum.testSuite("min", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(min([3, 1, 5, 8, 3]), 1);
    });
    Rhum.testCase("one element", () => {
      Rhum.asserts.assertEquals(min([5]), 5);
    });
    Rhum.testCase("empty causes error", () => {
      Rhum.asserts.assertThrows(() => min([]));
    });
  });
});

Rhum.run()

