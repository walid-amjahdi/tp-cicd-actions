const { add, multiply, subtract, factorial } = require("../src/math");

describe("add", () => {
  test("additionne deux nombres positifs", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("additionne avec un nombre négatif", () => {
    expect(add(-1, 5)).toBe(4);
  });
});

describe("multiply", () => {
  test("multiplie deux nombres", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("multiplie par zéro", () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe("subtract", () => {
  test("soustrait deux nombres", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("soustrait avec un nombre négatif", () => {
    expect(subtract(3, -2)).toBe(5);
  });
});

describe("factorial", () => {
  test("factorielle de 5", () => {
    expect(factorial(5)).toBe(120);
  });

  test("factorielle de 0", () => {
    expect(factorial(0)).toBe(1);
  });

  test("lance une erreur pour un nombre négatif", () => {
    expect(() => factorial(-1)).toThrow("Nombre négatif");
  });
});
