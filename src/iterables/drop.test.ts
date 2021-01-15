import { expect } from "chai";
import chain from "../chain";
import allIntegersStartingAt from "./allIntegersStartingAt";
import drop from "./drop";
import toArray from "./toArray";

describe("drop", () => {
  it("basic", () => {
    expect(
      chain(["the", "quick", "brown", "fox", "jumped"])
        .then(drop(2))
        .then(toArray)
        .end()
    ).to.deep.equal(["brown", "fox", "jumped"]);
  });
  it("drop no elements", () => {
    expect(
      chain(["the", "quick", "brown", "fox", "jumped"])
        .then(drop(0))
        .then(toArray)
        .end()
    ).to.deep.equal(["the", "quick", "brown", "fox", "jumped"]);
  });
  it("drop one element", () => {
    expect(
      chain(["the", "quick", "brown", "fox", "jumped"])
        .then(drop(1))
        .then(toArray)
        .end()
    ).to.deep.equal(["quick", "brown", "fox", "jumped"]);
  });
  it("drop all elements", () => {
    expect(
      chain(["the", "quick", "brown", "fox", "jumped"])
        .then(drop(5))
        .then(toArray)
        .end()
    ).to.deep.equal([]);
  });
  it("drop more than all elements", () => {
    expect(
      chain(["the", "quick", "brown", "fox", "jumped"])
        .then(drop(7))
        .then(toArray)
        .end()
    ).to.deep.equal([]);
  });
  it("infinite", () => {
    const iter = drop(3)(allIntegersStartingAt(0))[Symbol.iterator]();
    expect(iter.next()).to.deep.equal({ value: 3, done: false });
    expect(iter.next()).to.deep.equal({ value: 4, done: false });
    expect(iter.next()).to.deep.equal({ value: 5, done: false });
  });
});
