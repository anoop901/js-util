import { expect } from "chai";
import generate from "./generate";
import toArray from "./toArray";

describe("generate", () => {
  it("generates indexes", () => {
    expect(toArray(generate((index) => index, 5))).to.deep.equal([
      0, 1, 2, 3, 4,
    ]);
  });

  it("generates square numbers", () => {
    expect(toArray(generate((index) => index * index, 5))).to.deep.equal([
      0, 1, 4, 9, 16,
    ]);
  });

  it("generates infinitely many square numbers", () => {
    const iter = generate((index) => index * index);
    expect(iter.next()).to.deep.equal({ value: 0, done: false });
    expect(iter.next()).to.deep.equal({ value: 1, done: false });
    expect(iter.next()).to.deep.equal({ value: 4, done: false });
    expect(iter.next()).to.deep.equal({ value: 9, done: false });
    expect(iter.next()).to.deep.equal({ value: 16, done: false });
    expect(iter.next()).to.deep.equal({ value: 25, done: false });
  });

  it("generates triangle", () => {
    const result = toArray(
      generate((i) => toArray(generate((j) => "*", i + 1)), 3)
    );
    expect(result).to.deep.equal([["*"], ["*", "*"], ["*", "*", "*"]]);
  });
});
