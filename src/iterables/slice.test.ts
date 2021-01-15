import { expect } from "chai";
import allIntegersStartingAt from "./allIntegersStartingAt";
import slice from "./slice";

describe("slice", () => {
  it("basic", () => {
    expect(
      Array.from(slice(2, 5)(["the", "quick", "brown", "fox", "jumps", "over"]))
    ).to.deep.equal(["brown", "fox", "jumps"]);
  });
  it("infinite", () => {
    expect(Array.from(slice(2, 5)(allIntegersStartingAt(10)))).to.deep.equal([
      12,
      13,
      14,
    ]);
  });
  it("end out of bounds", () => {
    expect(
      Array.from(slice(2, 5)(["the", "quick", "brown", "fox"]))
    ).to.deep.equal(["brown", "fox"]);
  });
  it("start and end out of bounds", () => {
    expect(
      Array.from(slice(5, 7)(["the", "quick", "brown", "fox"]))
    ).to.deep.equal([]);
  });
  it("start and end equal", () => {
    expect(
      Array.from(slice(2, 2)(["the", "quick", "brown", "fox"]))
    ).to.deep.equal([]);
  });
  it("end before start", () => {
    expect(
      Array.from(slice(2, 1)(["the", "quick", "brown", "fox"]))
    ).to.deep.equal([]);
  });
});
