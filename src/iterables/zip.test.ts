import { expect } from "chai";
import allIntegersStartingAt from "./allIntegersStartingAt";
import zip from "./zip";

describe("zip", () => {
  it("same size", () => {
    expect(
      Array.from(
        zip([111, 22222, 33333, 444], ["the", "quick", "brown", "fox"])
      )
    ).to.deep.equal([
      { first: 111, second: "the" },
      { first: 22222, second: "quick" },
      { first: 33333, second: "brown" },
      { first: 444, second: "fox" },
    ]);
  });
  it("different sizes (bigger, smaller)", () => {
    expect(
      Array.from(
        zip([111, 22222, 33333, 444, 5, 6], ["the", "quick", "brown", "fox"])
      )
    ).to.deep.equal([
      { first: 111, second: "the" },
      { first: 22222, second: "quick" },
      { first: 33333, second: "brown" },
      { first: 444, second: "fox" },
    ]);
  });
  it("different sizes (smaller, bigger)", () => {
    expect(
      Array.from(zip([111, 22222], ["the", "quick", "brown", "fox"]))
    ).to.deep.equal([
      { first: 111, second: "the" },
      { first: 22222, second: "quick" },
    ]);
  });
  it("first empty", () => {
    expect(Array.from(zip([], ["the", "quick", "brown", "fox"]))).to.deep.equal(
      []
    );
  });
  it("second empty", () => {
    expect(Array.from(zip([1, 2, 3, 4], []))).to.deep.equal([]);
  });
  it("both empty", () => {
    expect(Array.from(zip([], []))).to.deep.equal([]);
  });
  it("one infinite", () => {
    expect(
      Array.from(
        zip(allIntegersStartingAt(0), ["the", "quick", "brown", "fox"])
      )
    ).to.deep.equal([
      { first: 0, second: "the" },
      { first: 1, second: "quick" },
      { first: 2, second: "brown" },
      { first: 3, second: "fox" },
    ]);
  });
});
