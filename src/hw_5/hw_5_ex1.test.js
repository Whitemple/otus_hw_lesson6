import {
  sumValueArray,
  createNewArr,
  findTheSmallest,
  findTheBiggest,
} from "./hw_5_ex1.js";

describe("Testing sumValueArray function: ", () => {
  test("Show the sum of arr's elements:", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(sumValueArray(arr)).toBe(55);
  });
  test("Show the sum of arr's elements:", () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(sumValueArray(arr)).toBe(21);
  });
  test("Show the sum of arr's elements:", () => {
    const arr = [17, 8, 9, 10];
    expect(sumValueArray(arr)).toBe(44);
  });
});

describe("Testing createNewArr function: ", () => {
  test("Create new arr where each elem bigger twice then orinial:", () => {
    const arr = [1, 2, 3];
    expect(createNewArr(arr)).toEqual([2, 4, 6]);
  });
  test("Create new arr where each elem bigger twice then orinial:", () => {
    const arr = [5, 6, 7];
    expect(createNewArr(arr)).toEqual([10, 12, 14]);
  });
  test("Create new arr where each elem bigger twice then orinial:", () => {
    const arr = [8, 9, 2];
    expect(createNewArr(arr)).toEqual([16, 18, 4]);
  });
});

describe("Testing show the smallest and bigger number in array", () => {
  test("Show the smallest value in array:", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(findTheSmallest(arr)).toBe(1);
  });
  test("Show the smallest value in array:", () => {
    const arr = [10, 5, 8, 2, -5];
    expect(findTheSmallest(arr)).toBe(-5);
  });
  test("Show the biggest value in array:", () => {
    const arr = [10, 5, 8, 2, -5];
    expect(findTheBiggest(arr)).toBe(10);
  });
  test("Show the biggest value in array:", () => {
    const arr = [11, 25, -8, 32, -55];
    expect(findTheBiggest(arr)).toBe(32);
  });
});
