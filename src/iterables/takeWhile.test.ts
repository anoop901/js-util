import { Rhum } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import takeWhile from "./takeWhile.ts";

Rhum.testPlan("takeWhile.test.ts", () => {
  Rhum.testSuite("takeWhile", () => {
    Rhum.testCase("basic", () => {
      const iter = takeWhile((x: number) => x % 10 !== 0)([6, 11, 50, 28, 80]);
      Rhum.asserts.assertEquals(Array.from(iter), [6, 11]);
    });
    Rhum.testCase("take entire iterable", () => {
      const iter = takeWhile((x: number) => x % 10 !== 0)([6, 11, 28]);
      Rhum.asserts.assertEquals(Array.from(iter), [6, 11, 28]);
    });
    Rhum.testCase("infinite", () => {
      const iter = takeWhile((x: number) => x % 10 !== 0)(
        allIntegersStartingAt(127)
      );
      Rhum.asserts.assertEquals(Array.from(iter), [127, 128, 129]);
    });
  });
});

Rhum.run()

