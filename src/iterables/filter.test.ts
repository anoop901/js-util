import { expect } from "chai";
import filter from "./filter";

describe("filter", () => {
  it("basic", () => {
    const iter = filter((x: number) => x % 10 === 0)([6, 11, 50, 28, 80]);
    expect(Array.from(iter)).to.deep.equal([50, 80]);
  });
  it("all match", () => {
    const iter = filter((x: number) => x % 10 === 0)([50, 80, 70]);
    expect(Array.from(iter)).to.deep.equal([50, 80, 70]);
  });
  it("none match", () => {
    const iter = filter((x: number) => x % 10 === 0)([6, 11, 28]);
    expect(Array.from(iter)).to.deep.equal([]);
  });
});
