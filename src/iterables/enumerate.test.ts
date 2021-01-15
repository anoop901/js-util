import { expect } from "chai";
import enumerate from "./enumerate";

describe("enumerate", () => {
  it("basic", () => {
    expect(
      Array.from(enumerate(["the", "quick", "brown", "fox"]))
    ).to.deep.equal([
      { index: 0, value: "the" },
      { index: 1, value: "quick" },
      { index: 2, value: "brown" },
      { index: 3, value: "fox" },
    ]);
  });
});
