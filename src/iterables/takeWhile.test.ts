import { expect } from "chai";
import allIntegersStartingAt from "./allIntegersStartingAt";
import takeWhile from "./takeWhile";

describe("takeWhile", () => {
  it("basic", () => {
    const iter = takeWhile((x: number) => x % 10 !== 0)([6, 11, 50, 28, 80]);
    expect(Array.from(iter)).to.deep.equal([6, 11]);
  });
  it("take entire iterable", () => {
    const iter = takeWhile((x: number) => x % 10 !== 0)([6, 11, 28]);
    expect(Array.from(iter)).to.deep.equal([6, 11, 28]);
  });
  it("infinite", () => {
    const iter = takeWhile((x: number) => x % 10 !== 0)(
      allIntegersStartingAt(127)
    );
    expect(Array.from(iter)).to.deep.equal([127, 128, 129]);
  });
});
