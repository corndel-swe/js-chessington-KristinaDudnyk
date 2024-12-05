class Counter {
  #count;
  constructor(count = 0) {
    this.#count = count;
  }

  getCount() {
    return this.#count;
  }

  increment() {
    this.#count += 1;
  }

  reset() {
    this.#count = 0;
  }
}

// Replace `null` with an _instance_ of your counter
const counterInstance = new Counter();

// Please don't change the lines below!
export { Counter, counterInstance };
