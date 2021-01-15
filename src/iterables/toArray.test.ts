import { expect } from "chai";
import chain from "../chain";
import allIntegersStartingAt from "./allIntegersStartingAt";
import takeWhile from "./takeWhile";
import toArray from "./toArray";

describe("toArray", () => {
  it("basic", () => {
    expect(toArray([3, 6, 5])).to.deep.equal([3, 6, 5]);
  });
  it("from generator", () => {
    expect(
      chain(allIntegersStartingAt(0))
        .then(takeWhile((x) => x < 4))
        .then(toArray)
        .end()
    ).to.deep.equal([0, 1, 2, 3]);
  });
});
