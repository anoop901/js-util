import { expect } from "chai";
import chain from "../chain";
import anyMatch from "./anyMatch";

describe("anyMatch", () => {
  it("all match", () => {
    expect(
      chain([3, 6, 2, 6])
        .then(anyMatch((x) => x < 10))
        .end()
    ).to.be.true;
  });
  it("mixed", () => {
    expect(
      chain([3, 6, 12, 6])
        .then(anyMatch((x) => x < 10))
        .end()
    ).to.be.true;
  });
  it("none match", () => {
    expect(
      chain([13, 16, 12, 16])
        .then(anyMatch<number>((x) => x < 10))
        .end()
    ).to.be.false;
  });
  it("empty", () => {
    expect(
      chain([])
        .then(anyMatch((x) => x < 10))
        .end()
    ).to.be.false;
  });
});
