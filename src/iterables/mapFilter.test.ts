import { expect } from "chai";
import chain from "../chain";
import mapFilter from "./mapFilter";
import toArray from "./toArray";

describe("mapFilter", () => {
  it("basic", () => {
    expect(
      chain([
        { a: 3, b: "the" },
        { a: null, b: "quick" },
        { a: null, b: "brown" },
        { a: 5, b: "fox" },
      ])
        .then(mapFilter(({ a }) => a))
        .then(toArray)
        .end()
    ).to.deep.equal([3, 5]);
  });
});
