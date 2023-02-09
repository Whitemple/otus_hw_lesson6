const { multy } = require('./hw_1');

describe('Test for function multy', ()=>{
    test('should return 4 after 2*2',()=>{
        expect(multy(2,2)).toBe(4);
    })
    test('should return 5 after 5*5',()=>{
        expect(multy(5,5)).toBe(25);
    })
    test('should return 16 after 8*2',()=>{
        expect(multy(8,2)).toBe(16);
    })
})