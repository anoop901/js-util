import { expect } from "chai";
import min from "./min";

describe("min", () => {
  it("basic", () => {
    expect(min([3, 1, 5, 8, 3])).to.equal(1);
  });
  it("one element", () => {
    expect(min([5])).to.equal(5);
  });
  it("empty causes error", () => {
    expect(() => min([])).to.throw();
  });
});
