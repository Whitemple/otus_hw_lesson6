/* 1.Напишите функцию diff, которая получает в качестве
параметров 2 числа и возвращает разницу между
наибольшим и наименьшим.
*/
const diff = (arg1, arg2) => {
  const result = arg1 > arg2 ? arg1 - arg2 : arg2 - arg1;
  return result;
};

/*
2.Напишите функцию isWord, которая принимает на
вход текстовую строку. Функция возвращает true, если
строка состоит из одного слова и false, если из
нескольких.
*/
const isWord = (string) => {
  const array = string.split(" ");
  const result = !(array.length > 1);
  return result;
};

/*
*Напишите функцию pow(a, x), которая вернёт
значение числа a, возведённого в степень x.
*/
const pow = (a, x) => a ** x;

export { diff, isWord, pow };
