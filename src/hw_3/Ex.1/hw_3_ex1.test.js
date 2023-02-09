/*
1.Вывести в консоль сумму всех целых чисел от 50 до
100.
*/

const {showSum} = require('./hw_3_ex1');

describe('Testing showSum function in hw_3 Ex.1: ', ()=>{
    test('Summary should be 3725',()=>{
        expect(showSum()).toBe(3725);
    });
})