import { Rhum } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import slice from "./slice.ts";

Rhum.testPlan("slice.test.ts", () => {
  Rhum.testSuite("slice", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(
        Array.from(slice(2, 5)(["the", "quick", "brown", "fox", "jumps", "over"])),
        ["brown", "fox", "jumps"]
      );
    });
    Rhum.testCase("infinite", () => {
      Rhum.asserts.assertEquals(Array.from(slice(2, 5)(allIntegersStartingAt(10))), [
        12,
        13,
        14,
      ]);
    });
    Rhum.testCase("end out of bounds", () => {
      Rhum.asserts.assertEquals(Array.from(slice(2, 5)(["the", "quick", "brown", "fox"])), [
        "brown",
        "fox",
      ]);
    });
    Rhum.testCase("start and end out of bounds", () => {
      Rhum.asserts.assertEquals(Array.from(slice(5, 7)(["the", "quick", "brown", "fox"])), []);
    });
    Rhum.testCase("start and end equal", () => {
      Rhum.asserts.assertEquals(Array.from(slice(2, 2)(["the", "quick", "brown", "fox"])), []);
    });
    Rhum.testCase("end before start", () => {
      Rhum.asserts.assertEquals(Array.from(slice(2, 1)(["the", "quick", "brown", "fox"])), []);
    });
  });
});

Rhum.run()

