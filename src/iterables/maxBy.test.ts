import { Rhum, assertThrows } from "../deps.ts";
import maxBy from "./maxBy.ts";

Rhum.testPlan("maxBy.test.ts", () => {
  Rhum.testSuite("maxBy", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(
        maxBy((x: string) => x.length)([
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
        "amazing"
      );
    });
    Rhum.testCase("one element", () => {
      Rhum.asserts.assertEquals(maxBy((x: string) => x.length)(["fox"]), "fox");
    });
    Rhum.testCase("empty causes error", () => {
      Rhum.asserts.assertThrows(() => maxBy((x: string) => x.length)([]));
    });
  });
});

Rhum.run()

