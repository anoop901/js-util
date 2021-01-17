import { Rhum } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";
import map from "./map.ts";

Rhum.testPlan("map.test.ts", () => {
  Rhum.testSuite("map", () => {
    Rhum.testCase("basic", () => {
      const iter = map((x: number) => x * 10)([2, 5, 3]);
      Rhum.asserts.assertEquals(Array.from(iter), [20, 50, 30]);
    });
    Rhum.testCase("infinite", () => {
      const iter = map((x: number) => x * 10)(allIntegersStartingAt(5));
      Rhum.asserts.assertEquals(iter.next(), { value: 50, done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: 60, done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: 70, done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: 80, done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: 90, done: false });
    });
    Rhum.testCase("change type", () => {
      const iter = map((x: string) => x.length)(["the", "quick", "brown", "fox"]);
      Rhum.asserts.assertEquals(Array.from(iter), [3, 5, 5, 3]);
    });
  });
});

Rhum.run()

