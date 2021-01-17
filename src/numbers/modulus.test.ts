import modulus from "./modulus.ts";
import { expect } from "chai";

describe("mod", () => {
  it("positive dividend, positive divisor", () => {
    expect(modulus(12, 5)).to.equal(2);
  });
  it("negative dividend, positive divisor", () => {
    expect(modulus(-12, 5)).to.equal(3);
  });
  it("positive dividend, negative divisor", () => {
    expect(modulus(12, -5)).to.equal(-3);
  });
  it("negative dividend, negative divisor", () => {
    expect(modulus(-12, -5)).to.equal(-2);
  });
  it("positive dividend, positive divisor, evenly divisible", () => {
    expect(modulus(15, 5)).to.equal(0);
  });
  it("negative dividend, positive divisor, evenly divisible", () => {
    expect(modulus(-15, 5)).to.equal(0);
  });
  it("positive dividend, negative divisor, evenly divisible", () => {
    expect(modulus(15, -5)).to.equal(-0);
  });
  it("negative dividend, negative divisor, evenly divisible", () => {
    expect(modulus(-15, -5)).to.equal(-0);
  });
});
