import { expect } from "chai";
import chain from "../chain";
import countMatching from "./countMatching";

describe("countMatching", () => {
  it("basic", () => {
    expect(
      chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
        .then(countMatching((x) => x % 3 === 0))
        .end()
    ).to.equal(3);
  });
  it("none matching", () => {
    expect(
      chain([1, 2, 4, 5, 7, 8, 10, 11])
        .then(countMatching((x) => x % 3 === 0))
        .end()
    ).to.equal(0);
  });
  it("all matching", () => {
    expect(
      chain([3, 6, 9])
        .then(countMatching((x) => x % 3 === 0))
        .end()
    ).to.equal(3);
  });
  it("empty iterable", () => {
    expect(
      chain([])
        .then(countMatching((x) => x % 3 === 0))
        .end()
    ).to.equal(0);
  });
});
