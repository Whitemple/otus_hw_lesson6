/*
1.В переменных a и b хранятся числа. Вывести в
консоль наибольшее из них.
*/

const showTheBiggestNumber = (num1, num2) => {
  const result = num1 > num2 ? num1 : num2;
  return result;
};

export { showTheBiggestNumber };
