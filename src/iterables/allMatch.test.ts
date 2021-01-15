import { expect } from "chai";
import chain from "../chain";
import allMatch from "./allMatch";

describe("allMatch", () => {
  it("all match", () => {
    expect(
      chain([3, 6, 2, 6])
        .then(allMatch((x) => x < 10))
        .end()
    ).to.be.true;
  });
  it("mixed", () => {
    expect(
      chain([3, 6, 12, 6])
        .then(allMatch((x) => x < 10))
        .end()
    ).to.be.false;
  });
  it("none match", () => {
    expect(
      chain([13, 16, 12, 16])
        .then(allMatch((x) => x < 10))
        .end()
    ).to.be.false;
  });
  it("empty", () => {
    expect(
      chain([])
        .then(allMatch((x) => x < 10))
        .end()
    ).to.be.true;
  });
});
