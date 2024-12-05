import { Square, Rectangle } from "../exercises/rectangles.js";
import { strict as assert } from "assert";

describe("Rectangle", () => {
  describe("area", () => {
    it("should return the area of the rectangle", () => {
      const rectangle = new Rectangle(4, 5);
      assert.equal(
        rectangle.area(),
        20,
        "The area of the rectangle is incorrect",
      );
    });
  });
});
