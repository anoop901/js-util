import { expect } from "chai";
import maxBy from "./maxBy";

describe("maxBy", () => {
  it("basic", () => {
    expect(
      maxBy((x: string) => x.length)([
        "the",
        "quick",
        "brown",
        "fox",
        "jumps",
        "over",
        "an",
        "amazing",
        "dog",
      ])
    ).to.equal("amazing");
  });
  it("one element", () => {
    expect(maxBy((x: string) => x.length)(["fox"])).to.equal("fox");
  });
  it("empty causes error", () => {
    expect(() => maxBy((x: string) => x.length)([])).to.throw();
  });
});
