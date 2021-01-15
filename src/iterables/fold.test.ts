import { expect } from "chai";
import fold from "./fold";

describe("fold", () => {
  it("basic", () => {
    expect(fold(0, (acc, x: number) => acc + x)([5, 2, 9])).to.equal(16);
  });
  it("different accumulator type", () => {
    expect(
      fold(":", (acc, x: number) => acc + x.toString() + ":")([5, 2, 9])
    ).to.equal(":5:2:9:");
  });
});
