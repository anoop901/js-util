import chain from "../chain.ts";
import { Rhum } from "../deps.ts";
import allMatch from "./allMatch.ts";

Rhum.testPlan("allMatch.test.ts", () => {
  Rhum.testSuite("allMatch", () => {
    Rhum.testCase("all match", () => {
      Rhum.asserts.assert(
        chain([3, 6, 2, 6])
          .then(allMatch((x) => x < 10))
          .end()
      );
    });
    Rhum.testCase("mixed", () => {
      Rhum.asserts.assert(
        !chain([3, 6, 12, 6])
          .then(allMatch((x) => x < 10))
          .end()
      );
    });
    Rhum.testCase("none match", () => {
      Rhum.asserts.assert(
        !chain([13, 16, 12, 16])
          .then(allMatch((x) => x < 10))
          .end()
      );
    });
    Rhum.testCase("empty", () => {
      Rhum.asserts.assert(
        chain([])
          .then(allMatch((x) => x < 10))
          .end()
      );
    });
  });
});

Rhum.run()

