
const {sumLengthString} = require('./hw_1_ex2');

describe('Testing the sumLengthString function:',()=>{
    test("Expect 5 for sum string length 'ada' and 'ru' ",()=>{
        const firstArg = 'ada';
        const secondArg = 'ru';
        expect(sumLengthString(firstArg, secondArg)).toBe(5)
    });
    test("Expect 14 for sum string length 'iaroslav' and 'moscow' ",()=>{
        const firstArg = 'iaroslav';
        const secondArg = 'moscow';
        expect(sumLengthString(firstArg, secondArg)).toBe(14)
    });
    test("Expect 10 for sum string length 'ada' and 'ru' ",()=>{
        const firstArg = 'otus';
        const secondArg = 'school';
        expect(sumLengthString(firstArg, secondArg)).toBe(10)
    });
})