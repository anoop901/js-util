import chain from "../chain.ts";
import { Rhum } from "../deps.ts";
import repeat from "./repeat.ts";
import toArray from "./toArray.ts";

Rhum.testPlan("repeat.test.ts", () => {
  Rhum.testSuite("repeat", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(chain(repeat("buffalo", 3)).then(toArray).end(), [
        "buffalo",
        "buffalo",
        "buffalo",
      ]);
    });
    Rhum.testCase("0 times", () => {
      Rhum.asserts.assertEquals(chain(repeat("buffalo", 0)).then(toArray).end(), []);
    });
    Rhum.testCase("infinite", () => {
      const iter = repeat("buffalo")[Symbol.iterator]();
      Rhum.asserts.assertEquals(iter.next(), { value: "buffalo", done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: "buffalo", done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: "buffalo", done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: "buffalo", done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: "buffalo", done: false });
    });
  });
});

Rhum.run()

