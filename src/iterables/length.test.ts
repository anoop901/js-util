import { expect } from "chai";
import chain from "../chain";
import allIntegersStartingAt from "./allIntegersStartingAt";
import takeWhile from "./takeWhile";
import length from "./length";

describe("length", () => {
  it("basic", () => {
    expect(length([3, 5, 2])).to.equal(3);
  });
  it("empty", () => {
    expect(length([])).to.equal(0);
  });
  it("from generator", () => {
    expect(
      chain(allIntegersStartingAt(0))
        .then(takeWhile((x) => x < 4))
        .then(length)
        .end()
    ).to.equal(4);
  });
});
