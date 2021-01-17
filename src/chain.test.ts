import chain from "./chain.ts";
import { Rhum } from "./deps.ts";

Rhum.testPlan("chain.test.ts", () => {
  Rhum.testSuite("chain", () => {
    Rhum.testCase("single transformation", () => {
      Rhum.asserts.assertEquals(
        chain(5)
          .then((x) => x * 2)
          .end(),
        10
      );
    });
    
    Rhum.testCase("multiple transformation", () => {
      Rhum.asserts.assertEquals(
        chain(5)
          .then((x) => x * 2)
          .then((x) => x + 8)
          .then((x) => x * 10)
          .end(),
        180
      );
    });
    
    Rhum.testCase("transformation into different type", () => {
      Rhum.asserts.assertEquals(
        chain("hello")
          .then((x) => x.length)
          .end(),
        5
      );
    });
    
    Rhum.testCase("multiple transformations into different types", () => {
      Rhum.asserts.assertEquals(
        chain("hello")
          .then((x) => x.length)
          .then((x) => `there are ${x} letters`)
          .end(),
        "there are 5 letters"
      );
    });
  });
});

Rhum.run()

