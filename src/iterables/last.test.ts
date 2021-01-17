import { Rhum } from "../deps.ts";
import last from "./last.ts";

Rhum.testPlan("last.test.ts", () => {
  Rhum.testSuite("last", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(last([11, 12, 13]), 13);
    });
    Rhum.testCase("single element", () => {
      Rhum.asserts.assertEquals(last([11]), 11);
    });
    Rhum.testCase("empty", () => {
      Rhum.asserts.assertEquals(last([]), null);
    });
  });
});

Rhum.run()

