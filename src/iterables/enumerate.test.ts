import { Rhum } from "../deps.ts";
import enumerate from "./enumerate.ts";

Rhum.testPlan("enumerate.test.ts", () => {
  Rhum.testSuite("enumerate", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(Array.from(enumerate(["the", "quick", "brown", "fox"])), [
        { index: 0, value: "the" },
        { index: 1, value: "quick" },
        { index: 2, value: "brown" },
        { index: 3, value: "fox" },
      ]);
    });
  });
});

Rhum.run()

