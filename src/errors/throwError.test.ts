import { expect } from "chai";
import throwError from "./throwError";

describe("throwError", () => {
  it("throws error", () => {
    expect(() => throwError("foo")).to.throw("foo");
  });
});
