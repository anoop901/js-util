import { expect } from "chai";
import pairs from "./pairs";

describe("pairs", () => {
  it("basic", () => {
    expect(
      Array.from(pairs()(["the", "quick", "brown", "fox", "jumps"]))
    ).to.deep.equal([
      { first: "the", second: "quick" },
      { first: "quick", second: "brown" },
      { first: "brown", second: "fox" },
      { first: "fox", second: "jumps" },
    ]);
  });
  it("offset 2", () => {
    expect(
      Array.from(pairs(2)(["the", "quick", "brown", "fox", "jumps"]))
    ).to.deep.equal([
      { first: "the", second: "brown" },
      { first: "quick", second: "fox" },
      { first: "brown", second: "jumps" },
    ]);
  });
  it("empty iterable", () => {
    expect(Array.from(pairs()([]))).to.deep.equal([]);
  });
  it("one item in iterable", () => {
    expect(Array.from(pairs()(["one"]))).to.deep.equal([]);
  });
});
