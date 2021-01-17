import { Rhum } from "../deps.ts";
import modulus from "./modulus.ts";

Rhum.testPlan("modulus.test.ts", () => {
  Rhum.testSuite("modulus", () => {
    Rhum.testCase("positive dividend, positive divisor", () => {
      Rhum.asserts.assertEquals(modulus(12, 5), 2);
    });
    Rhum.testCase("negative dividend, positive divisor", () => {
      Rhum.asserts.assertEquals(modulus(-12, 5), 3);
    });
    Rhum.testCase("positive dividend, negative divisor", () => {
      Rhum.asserts.assertEquals(modulus(12, -5), -3);
    });
    Rhum.testCase("negative dividend, negative divisor", () => {
      Rhum.asserts.assertEquals(modulus(-12, -5), -2);
    });
    Rhum.testCase("positive dividend, positive divisor, evenly divisible", () => {
      Rhum.asserts.assertEquals(modulus(15, 5), 0);
    });
    Rhum.testCase("negative dividend, positive divisor, evenly divisible", () => {
      Rhum.asserts.assertEquals(modulus(-15, 5), 0);
    });
    Rhum.testCase("positive dividend, negative divisor, evenly divisible", () => {
      Rhum.asserts.assertEquals(modulus(15, -5), -0);
    });
    Rhum.testCase("negative dividend, negative divisor, evenly divisible", () => {
      Rhum.asserts.assertEquals(modulus(-15, -5), -0);
    });
  });
});

Rhum.run()

