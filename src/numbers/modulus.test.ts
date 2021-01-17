import { assertEquals } from "../deps.ts";
import modulus from "./modulus.ts";

Deno.test("positive dividend, positive divisor", () => {
  assertEquals(modulus(12, 5), 2);
});
Deno.test("negative dividend, positive divisor", () => {
  assertEquals(modulus(-12, 5), 3);
});
Deno.test("positive dividend, negative divisor", () => {
  assertEquals(modulus(12, -5), -3);
});
Deno.test("negative dividend, negative divisor", () => {
  assertEquals(modulus(-12, -5), -2);
});
Deno.test("positive dividend, positive divisor, evenly divisible", () => {
  assertEquals(modulus(15, 5), 0);
});
Deno.test("negative dividend, positive divisor, evenly divisible", () => {
  assertEquals(modulus(-15, 5), 0);
});
Deno.test("positive dividend, negative divisor, evenly divisible", () => {
  assertEquals(modulus(15, -5), -0);
});
Deno.test("negative dividend, negative divisor, evenly divisible", () => {
  assertEquals(modulus(-15, -5), -0);
});
