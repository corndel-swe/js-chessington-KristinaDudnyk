import { Maths } from "../exercises/maths.js";
import { strict as assert } from "assert";

describe("Math", () => {
  describe("the PI property", () => {
    it("should exist", () => {
      assert("PI" in Maths, "Maths should have a PI property");
    });
    it("should be equal to 3.14", () => {
      assert.strictEqual(Maths.PI, 3.14);
    });
    it("should return the largest of two numbers", () => {
      assert.strictEqual(Maths.max(5, 8), 8);
    });
  });

  describe("Maths.round", () => {
    it("should return the same number when given a whole number", () => {
      assert.strictEqual(Maths.round(5), 5);
    });
    it("should return a rounds _down_ when given a number with a decimal part less than 0.5", () => {
      assert.strictEqual(Maths.round(230.5), 231);
    });
  });
});
