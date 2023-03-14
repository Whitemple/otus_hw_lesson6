import { sumEnteredNumbers } from "./hw_1_ex3.js";

describe("testing sumEnteredNumbers function: ", () => {
  test("Should return 6 for sum numbers in string '123' ", () => {
    // global.open = jest.fn();
    jest.spyOn(window, "prompt").mockImplementation(() => "123");
    expect(sumEnteredNumbers()).toBe(6);
  });
  test("Should return 15 for sum numbers in string '555' ", () => {
    jest.spyOn(global, "prompt").mockImplementation(() => "555");
    expect(sumEnteredNumbers()).toBe(15);
  });
  test("Should return 16 for sum numbers in string '295' ", () => {
    jest.spyOn(global, "prompt").mockImplementation(() => "295");
    expect(sumEnteredNumbers()).toBe(16);
  });
});
