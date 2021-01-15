import { expect } from "chai";
import filterNonNullish from "./filterNonNullish";

describe("filterNonNullish", () => {
  it("iterable containing some nulls", () => {
    const iter = filterNonNullish([6, 11, null, 28, null]);
    expect(Array.from(iter)).to.deep.equal([6, 11, 28]);
  });
  it("iterable containing some undefineds", () => {
    const iter = filterNonNullish([6, 11, undefined, 28, undefined]);
    expect(Array.from(iter)).to.deep.equal([6, 11, 28]);
  });
  it("iterable containing some nulls and undefineds", () => {
    const iter = filterNonNullish([6, 11, undefined, 28, null]);
    expect(Array.from(iter)).to.deep.equal([6, 11, 28]);
  });
  it("all not nullish", () => {
    const iter = filterNonNullish([6, 11, 28]);
    expect(Array.from(iter)).to.deep.equal([6, 11, 28]);
  });
  it("all nullish", () => {
    const iter = filterNonNullish([null, null, null]);
    expect(Array.from(iter)).to.deep.equal([]);
  });
});
