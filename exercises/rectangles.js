export class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.#width = width;
    this.#height = height;
  }

  area() {
    return this.#width * this.#height;
  }

  perimeter() {
    return 2 * (this.#width + this.#height);
  }

  width() {
    return this.#width;
  }

  height() {
    return this.#height;
  }
}

export class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

const rec = new Rectangle(3, 4);
const rec2 = new Rectangle(3, 3);

const side = 3;

const rec3 = new Rectangle(side, side);
