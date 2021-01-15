import { expect } from "chai";
import chain from "../chain";
import allIntegersStartingAt from "./allIntegersStartingAt";
import take from "./take";
import toArray from "./toArray";

describe("take", () => {
  it("basic", () => {
    expect(
      chain(["the", "quick", "brown", "fox", "jumped"])
        .then(take(2))
        .then(toArray)
        .end()
    ).to.deep.equal(["the", "quick"]);
  });
  it("take no elements", () => {
    expect(
      chain(["the", "quick", "brown", "fox", "jumped"])
        .then(take(0))
        .then(toArray)
        .end()
    ).to.deep.equal([]);
  });
  it("take one element", () => {
    expect(
      chain(["the", "quick", "brown", "fox", "jumped"])
        .then(take(1))
        .then(toArray)
        .end()
    ).to.deep.equal(["the"]);
  });
  it("take all elements", () => {
    expect(
      chain(["the", "quick", "brown", "fox", "jumped"])
        .then(take(5))
        .then(toArray)
        .end()
    ).to.deep.equal(["the", "quick", "brown", "fox", "jumped"]);
  });
  it("take more than all elements", () => {
    expect(
      chain(["the", "quick", "brown", "fox", "jumped"])
        .then(take(7))
        .then(toArray)
        .end()
    ).to.deep.equal(["the", "quick", "brown", "fox", "jumped"]);
  });
  it("infinite", () => {
    expect(
      chain(allIntegersStartingAt(0)).then(take(3)).then(toArray).end()
    ).to.deep.equal([0, 1, 2]);
  });
});
