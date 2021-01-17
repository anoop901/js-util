import { Rhum } from "../deps.ts";
import splitAt from "./splitAt.ts";

Rhum.testPlan("splitAt.test.ts", () => {
  Rhum.testSuite("splitAt", () => {
    Rhum.testCase("complete before, then complete after", () => {
      const { before, after } = splitAt(3)(
        ["the", "quick", "brown", "fox", "jumps"][Symbol.iterator]()
      );
      Rhum.asserts.assertEquals(before.next(), { value: "the", done: false });
      Rhum.asserts.assertEquals(before.next(), { value: "quick", done: false });
      Rhum.asserts.assertEquals(before.next(), { value: "brown", done: false });
      Rhum.asserts.assertEquals(before.next(), { value: undefined, done: true });
      Rhum.asserts.assertEquals(after.next(), { value: "fox", done: false });
      Rhum.asserts.assertEquals(after.next(), { value: "jumps", done: false });
      Rhum.asserts.assertEquals(after.next(), { value: undefined, done: true });
    });
    Rhum.testCase("complete after, then complete before", () => {
      const { before, after } = splitAt(3)(
        ["the", "quick", "brown", "fox", "jumps"][Symbol.iterator]()
      );
      Rhum.asserts.assertEquals(after.next(), { value: "fox", done: false });
      Rhum.asserts.assertEquals(after.next(), { value: "jumps", done: false });
      Rhum.asserts.assertEquals(after.next(), { value: undefined, done: true });
      Rhum.asserts.assertEquals(before.next(), { value: "the", done: false });
      Rhum.asserts.assertEquals(before.next(), { value: "quick", done: false });
      Rhum.asserts.assertEquals(before.next(), { value: "brown", done: false });
      Rhum.asserts.assertEquals(before.next(), { value: undefined, done: true });
    });
    Rhum.testCase("interleave iterators, before first", () => {
      const { before, after } = splitAt(3)(
        ["the", "quick", "brown", "fox", "jumps"][Symbol.iterator]()
      );
      Rhum.asserts.assertEquals(before.next(), { value: "the", done: false });
      Rhum.asserts.assertEquals(after.next(), { value: "fox", done: false });
      Rhum.asserts.assertEquals(before.next(), { value: "quick", done: false });
      Rhum.asserts.assertEquals(before.next(), { value: "brown", done: false });
      Rhum.asserts.assertEquals(before.next(), { value: undefined, done: true });
      Rhum.asserts.assertEquals(after.next(), { value: "jumps", done: false });
      Rhum.asserts.assertEquals(after.next(), { value: undefined, done: true });
    });
    Rhum.testCase("interleave iterators, after first", () => {
      const { before, after } = splitAt(3)(
        ["the", "quick", "brown", "fox", "jumps"][Symbol.iterator]()
      );
      Rhum.asserts.assertEquals(after.next(), { value: "fox", done: false });
      Rhum.asserts.assertEquals(before.next(), { value: "the", done: false });
      Rhum.asserts.assertEquals(before.next(), { value: "quick", done: false });
      Rhum.asserts.assertEquals(after.next(), { value: "jumps", done: false });
      Rhum.asserts.assertEquals(after.next(), { value: undefined, done: true });
      Rhum.asserts.assertEquals(before.next(), { value: "brown", done: false });
      Rhum.asserts.assertEquals(before.next(), { value: undefined, done: true });
    });
  });
});

Rhum.run()

