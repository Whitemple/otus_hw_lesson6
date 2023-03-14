/*
3*Запросить у пользователя ввод числа N. Вывести в
консоль среднее арифметическое всех нечётных
чисел от 1 до N.
*/

const middleSum = () => {
  const userNumber = +prompt("Enter number: ");
  let result = 0;
  let count = 0;
  for (let i = 0; i <= userNumber; i += 1) {
    if (i % 2 !== 0) {
      result += i;
      count += 1;
    }
  }
  result /= count;
  return result;
};

export { middleSum };
