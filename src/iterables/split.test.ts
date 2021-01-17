import { Rhum } from "../deps.ts";
import split from "./split.ts";

Rhum.testPlan("split.test.ts", () => {
  Rhum.testSuite("split", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(Array.from(split(0)([3, 4, 5, 0, 6, 7, 0, 8])), [
        [3, 4, 5],
        [6, 7],
        [8],
      ]);
    });
    Rhum.testCase("multiple consecutive separators", () => {
      Rhum.asserts.assertEquals(Array.from(split(0)([3, 4, 5, 0, 0, 6, 7, 0, 8])), [
        [3, 4, 5],
        [6, 7],
        [8],
      ]);
    });
    Rhum.testCase("separators only", () => {
      Rhum.asserts.assertEquals(Array.from(split(0)([0, 0, 0])), []);
    });
    Rhum.testCase("empty list", () => {
      Rhum.asserts.assertEquals(Array.from(split(0)([])), []);
    });
    Rhum.testCase("only one chunk", () => {
      Rhum.asserts.assertEquals(Array.from(split(0)([3, 4])), [[3, 4]]);
    });
    Rhum.testCase("chunks have only one element", () => {
      Rhum.asserts.assertEquals(Array.from(split(0)([3, 0, 4])), [[3], [4]]);
    });
    Rhum.testCase("separator at beginning", () => {
      Rhum.asserts.assertEquals(Array.from(split(0)([0, 3, 4])), [[3, 4]]);
    });
    Rhum.testCase("separator at end", () => {
      Rhum.asserts.assertEquals(Array.from(split(0)([3, 4, 0])), [[3, 4]]);
    });
  });
});

Rhum.run()

