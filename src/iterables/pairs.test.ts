import { Rhum } from "../deps.ts";
import pairs from "./pairs.ts";

Rhum.testPlan("pairs.test.ts", () => {
  Rhum.testSuite("pairs", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(Array.from(pairs()(["the", "quick", "brown", "fox", "jumps"])), [
        { first: "the", second: "quick" },
        { first: "quick", second: "brown" },
        { first: "brown", second: "fox" },
        { first: "fox", second: "jumps" },
      ]);
    });
    Rhum.testCase("offset 2", () => {
      Rhum.asserts.assertEquals(
        Array.from(pairs(2)(["the", "quick", "brown", "fox", "jumps"])),
        [
          { first: "the", second: "brown" },
          { first: "quick", second: "fox" },
          { first: "brown", second: "jumps" },
        ]
      );
    });
    Rhum.testCase("empty iterable", () => {
      Rhum.asserts.assertEquals(Array.from(pairs()([])), []);
    });
    Rhum.testCase("one item in iterable", () => {
      Rhum.asserts.assertEquals(Array.from(pairs()(["one"])), []);
    });
  });
});

Rhum.run()

