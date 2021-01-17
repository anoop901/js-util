import { Rhum, assertThrows } from "../deps.ts";
import minBy from "./minBy.ts";

Rhum.testPlan("minBy.test.ts", () => {
  Rhum.testSuite("minBy", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(
        minBy((x: string) => x.length)([
          "the",
          "quick",
          "brown",
          "fox",
          "jumps",
          "over",
          "an",
          "amazing",
          "dog",
        ]),
        "an"
      );
    });
    Rhum.testCase("one element", () => {
      Rhum.asserts.assertEquals(minBy((x: string) => x.length)(["fox"]), "fox");
    });
    Rhum.testCase("empty causes error", () => {
      Rhum.asserts.assertThrows(() => minBy((x: string) => x.length)([]));
    });
  });
});

Rhum.run()

