import { expect } from "chai";
import pairs from "./pairs";
import generate from "./generate";

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
  it("iterator", () => {
    expect(Array.from(pairs()(generate((i) => i, 5)))).to.deep.equal([
      { first: 0, second: 1 },
      { first: 1, second: 2 },
      { first: 2, second: 3 },
      { first: 3, second: 4 },
    ]);
  });

  it("infinite iterator", () => {
    const iter = pairs()(generate((i) => i));
    expect(iter.next()).to.deep.equal({
      value: { first: 0, second: 1 },
      done: false,
    });
    expect(iter.next()).to.deep.equal({
      value: { first: 1, second: 2 },
      done: false,
    });
    expect(iter.next()).to.deep.equal({
      value: { first: 2, second: 3 },
      done: false,
    });
    expect(iter.next()).to.deep.equal({
      value: { first: 3, second: 4 },
      done: false,
    });
  });
});
