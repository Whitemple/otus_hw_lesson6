/*
1.Вывести в консоль сумму всех целых чисел от 50 до
100.
*/

const showSum = () => {
    let result = 50;
    for (let i=51; i<100; i++){
        result+=i;
    }
    return result;
}

export {showSum};