import { Rhum } from "../deps.ts";
import throwError from "./throwError.ts";

Rhum.testPlan("throwError.test.ts", () => {
  Rhum.testSuite("throwError", () => {
    Rhum.testCase("throws error", () => {
      Rhum.asserts.assertThrows(() => throwError("foo"), Error, "foo");
    });
  });
});

Rhum.run()

