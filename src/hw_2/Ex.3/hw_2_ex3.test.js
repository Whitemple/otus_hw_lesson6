import { checkTheSquare } from "./hw_2_ex3.js";

describe("testing checkTheSquare function: ", () => {
  test("Should return inside for 2 and 7 ", () => {
    expect(checkTheSquare(2, 7)).toEqual("Inside");
  });
  test("Should return Outside for 5 and 3 ", () => {
    expect(checkTheSquare(5, 3)).toEqual("Outside");
  });
  test("Should return inside for 4 and 9 ", () => {
    expect(checkTheSquare(4, 9)).toEqual("Inside");
  });
});
