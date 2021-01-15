import { expect } from "chai";
import split from "./split";

describe("split", () => {
  it("basic", () => {
    expect(Array.from(split(0)([3, 4, 5, 0, 6, 7, 0, 8]))).to.deep.equal([
      [3, 4, 5],
      [6, 7],
      [8],
    ]);
  });
  it("multiple consecutive separators", () => {
    expect(Array.from(split(0)([3, 4, 5, 0, 0, 6, 7, 0, 8]))).to.deep.equal([
      [3, 4, 5],
      [6, 7],
      [8],
    ]);
  });
  it("separators only", () => {
    expect(Array.from(split(0)([0, 0, 0]))).to.deep.equal([]);
  });
  it("empty list", () => {
    expect(Array.from(split(0)([]))).to.deep.equal([]);
  });
  it("only one chunk", () => {
    expect(Array.from(split(0)([3, 4]))).to.deep.equal([[3, 4]]);
  });
  it("chunks have only one element", () => {
    expect(Array.from(split(0)([3, 0, 4]))).to.deep.equal([[3], [4]]);
  });
  it("separator at beginning", () => {
    expect(Array.from(split(0)([0, 3, 4]))).to.deep.equal([[3, 4]]);
  });
  it("separator at end", () => {
    expect(Array.from(split(0)([3, 4, 0]))).to.deep.equal([[3, 4]]);
  });
});
