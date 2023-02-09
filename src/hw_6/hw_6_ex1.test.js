const {diff, isWord, pow} = require('./hw_6_ex1.js');

describe("Testting diff function: ", ()=>{
    test("Return 5 when argument 10 minus argument 5", ()=>{
        expect(diff(5,10)).toBe(5)
    });
    test("Return 3 when argument 8 minus argument 5", ()=>{
        expect(diff(8,5)).toBe(3)
    });
    test("Return 22 when argument 50 minus argument 28", ()=>{
        expect(diff(28,50)).toBe(22)
    });
});

describe("Testting isWord function: ", ()=>{
    test("Return 'true' when string argument includes 1 word", ()=>{
        expect(isWord('string')).toBeTruthy();
    });
    test("Return 'false' when string argument includes more then 1 word", ()=>{
        expect(isWord('one word')).toBeFalsy();
    });
});

describe("Testting pow function: ", ()=>{
    test("Return 9 when 3 raise to a degree 3", ()=>{
        expect(pow(3,3)).toBe(27);
    });
    test("Return 25 when 5 raise to a degree 5", ()=>{
        expect(pow(5,2)).toBe(25);
    });
    test("Return 27 when 9 raise to a degree 3", ()=>{
        expect(pow(4,3)).toBe(64);
    });
});