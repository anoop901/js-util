import { Rhum } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import findFirstMatching from "./findFirstMatching.ts";

Rhum.testPlan("findFirstMatching.test.ts", () => {
  Rhum.testSuite("findFirstMatching", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(
        findFirstMatching((x: number) => x % 10 === 0)([6, 11, 50, 28, 80]),
        50
      );
    });
    Rhum.testCase("match at beginning", () => {
      Rhum.asserts.assertEquals(
        findFirstMatching((x: number) => x % 10 === 0)([40, 6, 11, 50, 28, 80]),
        40
      );
    });
    Rhum.testCase("no match", () => {
      Rhum.asserts.assertEquals(
        findFirstMatching((x: number) => x % 10 === 0)([6, 11, 28]),
        null
      );
    });
    Rhum.testCase("infinite", () => {
      Rhum.asserts.assertEquals(
        findFirstMatching((x: number) => x % 10 === 0)(allIntegersStartingAt(123)),
        130
      );
    });
  });
});

Rhum.run()

