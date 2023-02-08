const { sum } = require('./hw_1');

describe('Test for function sum', ()=>{
    test('should return 2 after 1+1',()=>{
        expect(sum(1,1)).toBe(2);
    })
    test('should return 5 after 2+3',()=>{
        expect(sum(2,3)).toBe(5);
    })
    test('should return 10 after 8+2',()=>{
        expect(sum(8,2)).toBe(10);
    })
})