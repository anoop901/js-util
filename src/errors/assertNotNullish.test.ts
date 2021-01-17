import { Rhum } from "../deps.ts";
import assertNotNullish from "./assertNotNullish.ts";

Rhum.testPlan("assertNotNullish.test.ts", () => {
  Rhum.testSuite("assertNotNullish", () => {
    Rhum.testCase("null argument", () => {
      Rhum.asserts.assertThrows(() => assertNotNullish(null));
    });
    Rhum.testCase("undefined argument", () => {
      Rhum.asserts.assertThrows(() => assertNotNullish(undefined));
    });
    Rhum.testCase("number argument", () => {
      assertNotNullish(123); // This should not throw.
    });
  });
});

Rhum.run();
