import { Rhum } from "../deps.ts";
import allIntegersStartingAt from "./allIntegersStartingAt.ts";

Rhum.testPlan("allIntegersStartingAt.test.ts", () => {
  Rhum.testSuite("allIntegersStartingAt", () => {
    Rhum.testCase("start at 0", () => {
      const iter = allIntegersStartingAt();
      Rhum.asserts.assertEquals(iter.next(), { value: 0, done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: 1, done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: 2, done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: 3, done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: 4, done: false });
    });
    Rhum.testCase("start at 123", () => {
      const iter = allIntegersStartingAt(123);
      Rhum.asserts.assertEquals(iter.next(), { value: 123, done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: 124, done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: 125, done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: 126, done: false });
      Rhum.asserts.assertEquals(iter.next(), { value: 127, done: false });
    });
  });
});

Rhum.run()

