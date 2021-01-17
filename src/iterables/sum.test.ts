import { Rhum } from "../deps.ts";
import sum from "./sum.ts";

Rhum.testPlan("sum.test.ts", () => {
  Rhum.testSuite("sum", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(sum([5, 2, 9]), 16);
    });
  });
});

Rhum.run()

