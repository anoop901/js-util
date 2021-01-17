import { Rhum } from "../deps.ts";
import filter from "./filter.ts";

Rhum.testPlan("filter.test.ts", () => {
  Rhum.testSuite("filter", () => {
    Rhum.testCase("basic", () => {
      const iter = filter((x: number) => x % 10 === 0)([6, 11, 50, 28, 80]);
      Rhum.asserts.assertEquals(Array.from(iter), [50, 80]);
    });
    Rhum.testCase("all match", () => {
      const iter = filter((x: number) => x % 10 === 0)([50, 80, 70]);
      Rhum.asserts.assertEquals(Array.from(iter), [50, 80, 70]);
    });
    Rhum.testCase("none match", () => {
      const iter = filter((x: number) => x % 10 === 0)([6, 11, 28]);
      Rhum.asserts.assertEquals(Array.from(iter), []);
    });
  });
});

Rhum.run()

