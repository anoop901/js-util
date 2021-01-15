import { expect } from "chai";
import reduce from "./reduce";

describe("reduce", () => {
  it("basic", () => {
    expect(
      reduce((a, b) => a + ":" + b)(["the", "quick", "brown", "fox"])
    ).to.equal("the:quick:brown:fox");
  });
  it("one element", () => {
    expect(reduce((a, b) => a + ":" + b)(["fox"])).to.equal("fox");
  });
  it("empty causes error", () => {
    expect(() => reduce((a, b) => a + ":" + b)([])).to.throw();
  });
});
