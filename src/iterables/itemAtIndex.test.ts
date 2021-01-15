import { expect } from "chai";
import itemAtIndex from "./itemAtIndex";

describe("itemAtIndex", () => {
  it("basic", () => {
    expect(
      itemAtIndex(2)(["the", "quick", "brown", "fox", "jumps", "over"])
    ).to.equal("brown");
  });
  it("index 0", () => {
    expect(
      itemAtIndex(0)(["the", "quick", "brown", "fox", "jumps", "over"])
    ).to.equal("the");
  });
  it("last index", () => {
    expect(
      itemAtIndex(5)(["the", "quick", "brown", "fox", "jumps", "over"])
    ).to.equal("over");
  });
  it("out of bounds", () => {
    expect(
      itemAtIndex(8)(["the", "quick", "brown", "fox", "jumps", "over"])
    ).to.equal(null);
  });
});
