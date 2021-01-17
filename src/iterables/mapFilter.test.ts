import chain from "../chain.ts";
import { Rhum } from "../deps.ts";
import mapFilter from "./mapFilter.ts";
import toArray from "./toArray.ts";

Rhum.testPlan("mapFilter.test.ts", () => {
  Rhum.testSuite("mapFilter", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(
        chain([
          { a: 3, b: "the" },
          { a: null, b: "quick" },
          { a: null, b: "brown" },
          { a: 5, b: "fox" },
        ])
          .then(mapFilter(({ a }) => a))
          .then(toArray)
          .end(),
        [3, 5]
      );
    });
  });
});

Rhum.run()

