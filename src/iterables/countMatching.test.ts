import chain from "../chain.ts";
import { Rhum } from "../deps.ts";
import countMatching from "./countMatching.ts";

Rhum.testPlan("countMatching.test.ts", () => {
  Rhum.testSuite("countMatching", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(
        chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
          .then(countMatching((x) => x % 3 === 0))
          .end(),
        3
      );
    });
    Rhum.testCase("none matching", () => {
      Rhum.asserts.assertEquals(
        chain([1, 2, 4, 5, 7, 8, 10, 11])
          .then(countMatching((x) => x % 3 === 0))
          .end(),
        0
      );
    });
    Rhum.testCase("all matching", () => {
      Rhum.asserts.assertEquals(
        chain([3, 6, 9])
          .then(countMatching((x) => x % 3 === 0))
          .end(),
        3
      );
    });
    Rhum.testCase("empty iterable", () => {
      Rhum.asserts.assertEquals(
        chain([])
          .then(countMatching((x) => x % 3 === 0))
          .end(),
        0
      );
    });
  });
});

Rhum.run()

