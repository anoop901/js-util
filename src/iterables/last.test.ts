import { expect } from "chai";
import last from "./last";

describe("last", () => {
  it("basic", () => {
    expect(last([11, 12, 13])).to.equal(13);
  });
  it("single element", () => {
    expect(last([11])).to.equal(11);
  });
  it("empty", () => {
    expect(last([])).to.equal(null);
  });
});
