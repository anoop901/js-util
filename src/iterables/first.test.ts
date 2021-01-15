import { expect } from "chai";
import first from "./first";

describe("first", () => {
  it("basic", () => {
    expect(first([11, 12, 13])).to.equal(11);
  });
  it("single element", () => {
    expect(first([11])).to.equal(11);
  });
  it("empty", () => {
    expect(first([])).to.equal(null);
  });
});
