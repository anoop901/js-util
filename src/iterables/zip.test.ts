import { Rhum } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import zip from "./zip.ts";

Rhum.testPlan("zip.test.ts", () => {
  Rhum.testSuite("zip", () => {
    Rhum.testCase("same size", () => {
      Rhum.asserts.assertEquals(
        Array.from(zip([111, 22222, 33333, 444], ["the", "quick", "brown", "fox"])),
        [
          { first: 111, second: "the" },
          { first: 22222, second: "quick" },
          { first: 33333, second: "brown" },
          { first: 444, second: "fox" },
        ]
      );
    });
    Rhum.testCase("different sizes (bigger, smaller)", () => {
      Rhum.asserts.assertEquals(
        Array.from(
          zip([111, 22222, 33333, 444, 5, 6], ["the", "quick", "brown", "fox"])
        ),
        [
          { first: 111, second: "the" },
          { first: 22222, second: "quick" },
          { first: 33333, second: "brown" },
          { first: 444, second: "fox" },
        ]
      );
    });
    Rhum.testCase("different sizes (smaller, bigger)", () => {
      Rhum.asserts.assertEquals(
        Array.from(zip([111, 22222], ["the", "quick", "brown", "fox"])),
        [
          { first: 111, second: "the" },
          { first: 22222, second: "quick" },
        ]
      );
    });
    Rhum.testCase("first empty", () => {
      Rhum.asserts.assertEquals(Array.from(zip([], ["the", "quick", "brown", "fox"])), []);
    });
    Rhum.testCase("second empty", () => {
      Rhum.asserts.assertEquals(Array.from(zip([1, 2, 3, 4], [])), []);
    });
    Rhum.testCase("both empty", () => {
      Rhum.asserts.assertEquals(Array.from(zip([], [])), []);
    });
    Rhum.testCase("one infinite", () => {
      Rhum.asserts.assertEquals(
        Array.from(zip(allIntegersStartingAt(0), ["the", "quick", "brown", "fox"])),
        [
          { first: 0, second: "the" },
          { first: 1, second: "quick" },
          { first: 2, second: "brown" },
          { first: 3, second: "fox" },
        ]
      );
    });
  });
});

Rhum.run()

