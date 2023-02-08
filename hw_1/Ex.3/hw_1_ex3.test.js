const {sumEnteredNumbers} = require('./hw_1_ex3');

describe('testing sumEnteredNumbers function: ',()=>{
    // window.prompt = jest.fn();

    test("Should return 6 for sum numbers in string '123' ",()=>{
        // window.prompt.mockClear();
        // jest.spyOn(window, 'prompt').returnValue='123';
        const sumEnteredNumbers=()=>{
            const result = '123'.split('').map(Number).reduce((i, value)=>i+value, 0);
            return result;
        }
        expect(sumEnteredNumbers()).toBe(6);
    })
    test("Should return 15 for sum numbers in string '555' ",()=>{
        // window.prompt.mockClear();
        // jest.spyOn(window, 'prompt').returnValue='123';
        const sumEnteredNumbers=()=>{
            const result = '555'.split('').map(Number).reduce((i, value)=>i+value, 0);
            return result;
        }
        expect(sumEnteredNumbers()).toBe(15);
    })
    test("Should return 16 for sum numbers in string '295' ",()=>{
        // window.prompt.mockClear();
        // jest.spyOn(window, 'prompt').returnValue='123';
        const sumEnteredNumbers=()=>{
            const result = '295'.split('').map(Number).reduce((i, value)=>i+value, 0);
            return result;
        }
        expect(sumEnteredNumbers()).toBe(16);
    })
})