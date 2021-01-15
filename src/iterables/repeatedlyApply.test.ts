import { expect } from "chai";
import chain from "../chain";
import repeatedlyApply from "./repeatedlyApply";

describe("repeatedlyApply", () => {
  it("basic", () => {
    const iterator = chain(10)
      .then(repeatedlyApply((x) => x * 2))
      .end();
    expect(iterator.next()).to.deep.equal({ value: 10, done: false });
    expect(iterator.next()).to.deep.equal({ value: 20, done: false });
    expect(iterator.next()).to.deep.equal({ value: 40, done: false });
    expect(iterator.next()).to.deep.equal({ value: 80, done: false });
    expect(iterator.next()).to.deep.equal({ value: 160, done: false });
  });
  it("times 0", () => {
    const iterator = chain(10)
      .then(repeatedlyApply((x) => x * 0))
      .end();
    expect(iterator.next()).to.deep.equal({ value: 10, done: false });
    expect(iterator.next()).to.deep.equal({ value: 0, done: false });
    expect(iterator.next()).to.deep.equal({ value: 0, done: false });
    expect(iterator.next()).to.deep.equal({ value: 0, done: false });
    expect(iterator.next()).to.deep.equal({ value: 0, done: false });
  });
});
