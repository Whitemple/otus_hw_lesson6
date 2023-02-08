/*
1.В переменных a и b хранятся числа. Вывести в
консоль наибольшее из них.
*/

const {showTheBiggestNumber} = require('./hw_2_ex1');

describe('Testing showTheBiggestNumber function',()=>{
    test('Should show 5 when arguments are 5 and 2',()=>{
        expect(showTheBiggestNumber(5, 2)).toBe(5);
    });
    test('Should show 7 when arguments are 5 and 7',()=>{
        expect(showTheBiggestNumber(5, 7)).toBe(7);
    });
    test('Should show 55 when arguments are 23 and 55',()=>{
        expect(showTheBiggestNumber(23, 55)).toBe(55);
    });
})