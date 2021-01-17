import chain from "../chain.ts";
import { Rhum } from "../deps.ts";
import anyMatch from "./anyMatch.ts";

Rhum.testPlan("anyMatch.test.ts", () => {
  Rhum.testSuite("anyMatch", () => {
    Rhum.testCase("all match", () => {
      Rhum.asserts.assert(
        chain([3, 6, 2, 6])
          .then(anyMatch((x) => x < 10))
          .end()
      );
    });
    Rhum.testCase("mixed", () => {
      Rhum.asserts.assert(
        chain([3, 6, 12, 6])
          .then(anyMatch((x) => x < 10))
          .end()
      );
    });
    Rhum.testCase("none match", () => {
      Rhum.asserts.assert(
        !chain([13, 16, 12, 16])
          .then(anyMatch<number>((x) => x < 10))
          .end()
      );
    });
    Rhum.testCase("empty", () => {
      Rhum.asserts.assert(
        !chain([])
          .then(anyMatch((x) => x < 10))
          .end()
      );
    });
  });
});

Rhum.run()

