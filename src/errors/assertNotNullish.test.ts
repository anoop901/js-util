import { expect } from "chai";
import assertNotNullish from "./assertNotNullish";

describe("assertNotNullish", () => {
  it("null argument", () => {
    expect(() => assertNotNullish(null)).to.throw();
  });
  it("undefined argument", () => {
    expect(() => assertNotNullish(undefined)).to.throw();
  });
  it("number argument", () => {
    expect(() => assertNotNullish(123)).to.not.throw();
  });
});
