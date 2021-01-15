import { expect } from "chai";
import sum from "./sum";

describe("sum", () => {
  it("basic", () => {
    expect(sum([5, 2, 9])).to.equal(16);
  });
});
