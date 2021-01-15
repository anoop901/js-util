import { expect } from "chai";
import minBy from "./minBy";

describe("minBy", () => {
  it("basic", () => {
    expect(
      minBy((x: string) => x.length)([
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
    ).to.equal("an");
  });
  it("one element", () => {
    expect(minBy((x: string) => x.length)(["fox"])).to.equal("fox");
  });
  it("empty causes error", () => {
    expect(() => minBy((x: string) => x.length)([])).to.throw();
  });
});
