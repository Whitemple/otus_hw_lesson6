/*
3*Запросить у пользователя ввод числа N. Вывести в
консоль среднее арифметическое всех нечётных
чисел от 1 до N.
*/

import { middleSum } from "./hw_3_ex3.js";

describe("Testing middleSum function: ", () => {
  test("Should be equal for num 5 to 3", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "5");
    expect(middleSum()).toBe(3);
  });
  test("Should be equal for num 7 to ", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "7");
    expect(middleSum()).toBe(4);
  });
  test("Should be equal for num 10 to 5", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "10");
    expect(middleSum()).toBe(5);
  });
});
