import { expect } from "chai";
import allIntegersStartingAt from "./allIntegersStartingAt";
import findFirstMatching from "./findFirstMatching";

describe("findFirstMatching", () => {
  it("basic", () => {
    expect(
      findFirstMatching((x: number) => x % 10 === 0)([6, 11, 50, 28, 80])
    ).to.equal(50);
  });
  it("match at beginning", () => {
    expect(
      findFirstMatching((x: number) => x % 10 === 0)([40, 6, 11, 50, 28, 80])
    ).to.equal(40);
  });
  it("no match", () => {
    expect(findFirstMatching((x: number) => x % 10 === 0)([6, 11, 28])).to.be
      .null;
  });
  it("infinite", () => {
    expect(
      findFirstMatching((x: number) => x % 10 === 0)(allIntegersStartingAt(123))
    ).to.equal(130);
  });
});
