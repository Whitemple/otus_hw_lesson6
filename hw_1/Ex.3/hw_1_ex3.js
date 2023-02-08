/*
3.*Написать программу, которая запрашивает у
пользователя ввод трёхзначного числа, а потом
выводит в консоль сумму цифр введённого числа.
*/

const sumEnteredNumbers=()=>{
    const result = prompt('Enter 3 numbers: ').split('').map(Number).reduce((i, value)=>i+value, 0);
    return result;
}

module.exports={sumEnteredNumbers};
