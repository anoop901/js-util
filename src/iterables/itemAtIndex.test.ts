import { Rhum } from "../deps.ts";
import itemAtIndex from "./itemAtIndex.ts";

Rhum.testPlan("itemAtIndex.test.ts", () => {
  Rhum.testSuite("itemAtIndex", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(
        itemAtIndex(2)(["the", "quick", "brown", "fox", "jumps", "over"]),
        "brown"
      );
    });
    Rhum.testCase("index 0", () => {
      Rhum.asserts.assertEquals(
        itemAtIndex(0)(["the", "quick", "brown", "fox", "jumps", "over"]),
        "the"
      );
    });
    Rhum.testCase("last index", () => {
      Rhum.asserts.assertEquals(
        itemAtIndex(5)(["the", "quick", "brown", "fox", "jumps", "over"]),
        "over"
      );
    });
    Rhum.testCase("out of bounds", () => {
      Rhum.asserts.assertEquals(
        itemAtIndex(8)(["the", "quick", "brown", "fox", "jumps", "over"]),
        null
      );
    });
  });
});

Rhum.run()

