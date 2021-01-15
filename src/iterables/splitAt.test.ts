import { expect } from "chai";
import splitAt from "./splitAt";

describe("splitAt", () => {
  it("complete before, then complete after", () => {
    const { before, after } = splitAt(3)(
      ["the", "quick", "brown", "fox", "jumps"][Symbol.iterator]()
    );
    expect(before.next()).to.deep.equal({ value: "the", done: false });
    expect(before.next()).to.deep.equal({ value: "quick", done: false });
    expect(before.next()).to.deep.equal({ value: "brown", done: false });
    expect(before.next()).to.deep.equal({ value: undefined, done: true });
    expect(after.next()).to.deep.equal({ value: "fox", done: false });
    expect(after.next()).to.deep.equal({ value: "jumps", done: false });
    expect(after.next()).to.deep.equal({ value: undefined, done: true });
  });
  it("complete after, then complete before", () => {
    const { before, after } = splitAt(3)(
      ["the", "quick", "brown", "fox", "jumps"][Symbol.iterator]()
    );
    expect(after.next()).to.deep.equal({ value: "fox", done: false });
    expect(after.next()).to.deep.equal({ value: "jumps", done: false });
    expect(after.next()).to.deep.equal({ value: undefined, done: true });
    expect(before.next()).to.deep.equal({ value: "the", done: false });
    expect(before.next()).to.deep.equal({ value: "quick", done: false });
    expect(before.next()).to.deep.equal({ value: "brown", done: false });
    expect(before.next()).to.deep.equal({ value: undefined, done: true });
  });
  it("interleave iterators, before first", () => {
    const { before, after } = splitAt(3)(
      ["the", "quick", "brown", "fox", "jumps"][Symbol.iterator]()
    );
    expect(before.next()).to.deep.equal({ value: "the", done: false });
    expect(after.next()).to.deep.equal({ value: "fox", done: false });
    expect(before.next()).to.deep.equal({ value: "quick", done: false });
    expect(before.next()).to.deep.equal({ value: "brown", done: false });
    expect(before.next()).to.deep.equal({ value: undefined, done: true });
    expect(after.next()).to.deep.equal({ value: "jumps", done: false });
    expect(after.next()).to.deep.equal({ value: undefined, done: true });
  });
  it("interleave iterators, after first", () => {
    const { before, after } = splitAt(3)(
      ["the", "quick", "brown", "fox", "jumps"][Symbol.iterator]()
    );
    expect(after.next()).to.deep.equal({ value: "fox", done: false });
    expect(before.next()).to.deep.equal({ value: "the", done: false });
    expect(before.next()).to.deep.equal({ value: "quick", done: false });
    expect(after.next()).to.deep.equal({ value: "jumps", done: false });
    expect(after.next()).to.deep.equal({ value: undefined, done: true });
    expect(before.next()).to.deep.equal({ value: "brown", done: false });
    expect(before.next()).to.deep.equal({ value: undefined, done: true });
  });
});
