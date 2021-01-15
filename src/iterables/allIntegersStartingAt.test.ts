import { expect } from "chai";
import allIntegersStartingAt from "./allIntegersStartingAt";

describe("allIntegersStartingAt", () => {
  it("start at 0", () => {
    const iter = allIntegersStartingAt();
    expect(iter.next()).to.deep.equal({ value: 0, done: false });
    expect(iter.next()).to.deep.equal({ value: 1, done: false });
    expect(iter.next()).to.deep.equal({ value: 2, done: false });
    expect(iter.next()).to.deep.equal({ value: 3, done: false });
    expect(iter.next()).to.deep.equal({ value: 4, done: false });
  });
  it("start at 123", () => {
    const iter = allIntegersStartingAt(123);
    expect(iter.next()).to.deep.equal({ value: 123, done: false });
    expect(iter.next()).to.deep.equal({ value: 124, done: false });
    expect(iter.next()).to.deep.equal({ value: 125, done: false });
    expect(iter.next()).to.deep.equal({ value: 126, done: false });
    expect(iter.next()).to.deep.equal({ value: 127, done: false });
  });
});
