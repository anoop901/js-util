import { Rhum, assertThrows } from "../deps.ts";
import reduce from "./reduce.ts";

Rhum.testPlan("reduce.test.ts", () => {
  Rhum.testSuite("reduce", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(
        reduce((a, b) => a + ":" + b)(["the", "quick", "brown", "fox"]),
        "the:quick:brown:fox"
      );
    });
    Rhum.testCase("one element", () => {
      Rhum.asserts.assertEquals(reduce((a, b) => a + ":" + b)(["fox"]), "fox");
    });
    Rhum.testCase("empty causes error", () => {
      Rhum.asserts.assertThrows(() => reduce((a, b) => a + ":" + b)([]));
    });
  });
});

Rhum.run()

