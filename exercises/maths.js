export class Maths {
  static PI = 3.14;
  static max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }

  static round(a) {
    if (a % 1 === 0) {
      return a;
    }
    const numStr = a.toString();
    const parts = numStr.split(".");
    const numAfterDot = parseInt(parts[1][0]); // first num after dot

    if (numAfterDot >= 5) {
      return parseInt(parts[0]) + 1;
    }
  }
}
