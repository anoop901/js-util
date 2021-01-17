import { Rhum, assertThrows } from "../deps.ts";
import max from "./max.ts";

Rhum.testPlan("max.test.ts", () => {
  Rhum.testSuite("max", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(max([3, 1, 5, 8, 3]), 8);
    });
    Rhum.testCase("one element", () => {
      Rhum.asserts.assertEquals(max([5]), 5);
    });
    Rhum.testCase("empty causes error", () => {
      Rhum.asserts.assertThrows(() => max([]));
    });
  });
});

Rhum.run()

