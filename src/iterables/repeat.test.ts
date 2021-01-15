import { expect } from "chai";
import chain from "../chain";
import repeat from "./repeat";
import toArray from "./toArray";

describe("repeat", () => {
  it("basic", () => {
    expect(chain(repeat("buffalo", 3)).then(toArray).end()).to.deep.equal([
      "buffalo",
      "buffalo",
      "buffalo",
    ]);
  });
  it("0 times", () => {
    expect(chain(repeat("buffalo", 0)).then(toArray).end()).to.deep.equal([]);
  });
  it("infinite", () => {
    const iter = repeat("buffalo")[Symbol.iterator]();
    expect(iter.next()).to.deep.equal({ value: "buffalo", done: false });
    expect(iter.next()).to.deep.equal({ value: "buffalo", done: false });
    expect(iter.next()).to.deep.equal({ value: "buffalo", done: false });
    expect(iter.next()).to.deep.equal({ value: "buffalo", done: false });
    expect(iter.next()).to.deep.equal({ value: "buffalo", done: false });
  });
});
