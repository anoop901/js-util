import chain from "../chain.ts";
import { Rhum } from "../deps.ts";
import repeatedlyApply from "./repeatedlyApply.ts";

Rhum.testPlan("repeatedlyApply.test.ts", () => {
  Rhum.testSuite("repeatedlyApply", () => {
    Rhum.testCase("basic", () => {
      const iterator = chain(10)
        .then(repeatedlyApply((x) => x * 2))
        .end();
      Rhum.asserts.assertEquals(iterator.next(), { value: 10, done: false });
      Rhum.asserts.assertEquals(iterator.next(), { value: 20, done: false });
      Rhum.asserts.assertEquals(iterator.next(), { value: 40, done: false });
      Rhum.asserts.assertEquals(iterator.next(), { value: 80, done: false });
      Rhum.asserts.assertEquals(iterator.next(), { value: 160, done: false });
    });
    Rhum.testCase("times 0", () => {
      const iterator = chain(10)
        .then(repeatedlyApply((x) => x * 0))
        .end();
      Rhum.asserts.assertEquals(iterator.next(), { value: 10, done: false });
      Rhum.asserts.assertEquals(iterator.next(), { value: 0, done: false });
      Rhum.asserts.assertEquals(iterator.next(), { value: 0, done: false });
      Rhum.asserts.assertEquals(iterator.next(), { value: 0, done: false });
      Rhum.asserts.assertEquals(iterator.next(), { value: 0, done: false });
    });
  });
});

Rhum.run()

