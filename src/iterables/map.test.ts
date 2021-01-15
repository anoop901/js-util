import { expect } from "chai";
import allIntegersStartingAt from "./allIntegersStartingAt";
import map from "./map";

describe("map", () => {
  it("basic", () => {
    const iter = map((x: number) => x * 10)([2, 5, 3]);
    expect(Array.from(iter)).to.deep.equal([20, 50, 30]);
  });
  it("infinite", () => {
    const iter = map((x: number) => x * 10)(allIntegersStartingAt(5));
    expect(iter.next()).to.deep.equal({ value: 50, done: false });
    expect(iter.next()).to.deep.equal({ value: 60, done: false });
    expect(iter.next()).to.deep.equal({ value: 70, done: false });
    expect(iter.next()).to.deep.equal({ value: 80, done: false });
    expect(iter.next()).to.deep.equal({ value: 90, done: false });
  });
  it("change type", () => {
    const iter = map((x: string) => x.length)(["the", "quick", "brown", "fox"]);
    expect(Array.from(iter)).to.deep.equal([3, 5, 5, 3]);
  });
});
