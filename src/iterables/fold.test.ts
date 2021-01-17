import { Rhum } from "../deps.ts";
import fold from "./fold.ts";

Rhum.testPlan("fold.test.ts", () => {
  Rhum.testSuite("fold", () => {
    Rhum.testCase("basic", () => {
      Rhum.asserts.assertEquals(fold(0, (acc, x: number) => acc + x)([5, 2, 9]), 16);
    });
    Rhum.testCase("different accumulator type", () => {
      Rhum.asserts.assertEquals(
        fold(":", (acc, x: number) => acc + x.toString() + ":")([5, 2, 9]),
        ":5:2:9:"
      );
    });
  });
});

Rhum.run()

