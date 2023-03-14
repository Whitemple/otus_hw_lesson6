/*
3*Запросить у пользователя ввод числа N. Вывести в
консоль среднее арифметическое всех нечётных
чисел от 1 до N.
*/

const middleSum = () => {
    let userNumber = +prompt('Enter number: ');
    let result = 0;
    let count = 0
    for(let i=0; i<=userNumber; i++){
        if(i%2!=0){
            result+=i;
            count++;
        }
    }
    result = result/count;
    return result;
}

export {middleSum};