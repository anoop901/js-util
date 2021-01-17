import { Rhum } from "../deps.ts";
import first from "./first.ts";

Rhum.testPlan("first.test.ts", () => {
  Rhum.testSuite("first", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(first([11, 12, 13]), 11);
    });
    Rhum.testCase("single element", () => {
      Rhum.asserts.assertEquals(first([11]), 11);
    });
    Rhum.testCase("empty", () => {
      Rhum.asserts.assertEquals(first([]), null);
    });
  });
});

Rhum.run()

