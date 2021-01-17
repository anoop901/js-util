import { Rhum } from "../deps.ts";
import filterNonNullish from "./filterNonNullish.ts";

Rhum.testPlan("filterNonNullish.test.ts", () => {
  Rhum.testSuite("filterNonNullish", () => {
    Rhum.testCase("iterable containing some nulls", () => {
      const iter = filterNonNullish([6, 11, null, 28, null]);
      Rhum.asserts.assertEquals(Array.from(iter), [6, 11, 28]);
    });
    Rhum.testCase("iterable containing some undefineds", () => {
      const iter = filterNonNullish([6, 11, undefined, 28, undefined]);
      Rhum.asserts.assertEquals(Array.from(iter), [6, 11, 28]);
    });
    Rhum.testCase("iterable containing some nulls and undefineds", () => {
      const iter = filterNonNullish([6, 11, undefined, 28, null]);
      Rhum.asserts.assertEquals(Array.from(iter), [6, 11, 28]);
    });
    Rhum.testCase("all not nullish", () => {
      const iter = filterNonNullish([6, 11, 28]);
      Rhum.asserts.assertEquals(Array.from(iter), [6, 11, 28]);
    });
    Rhum.testCase("all nullish", () => {
      const iter = filterNonNullish([null, null, null]);
      Rhum.asserts.assertEquals(Array.from(iter), []);
    });
  });
});

Rhum.run()

