import { expect } from "chai";
import max from "./max";

describe("max", () => {
  it("basic", () => {
    expect(max([3, 1, 5, 8, 3])).to.equal(8);
  });
  it("one element", () => {
    expect(max([5])).to.equal(5);
  });
  it("empty causes error", () => {
    expect(() => max([])).to.throw();
  });
});
