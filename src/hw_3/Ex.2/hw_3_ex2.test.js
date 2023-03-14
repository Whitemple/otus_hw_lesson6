/*
2.Вывести в консоль таблицу умножения на 7.
7 x 1 = 7
7 x 2 = 14
…
7 x 9 = 63
*/

import { showmultiplicationTable } from "./hw_3_ex2.js";

describe("Testing showmultiplicationTable function in hw_3 Ex.2: ", () => {
  test("Array must be equal to multiplication table for 7", () => {
    const arr = [
      "7*1=7",
      "7*2=14",
      "7*3=21",
      "7*4=28",
      "7*5=35",
      "7*6=42",
      "7*7=49",
      "7*8=56",
      "7*9=63",
    ];
    expect(showmultiplicationTable()).toEqual(arr);
  });
});
