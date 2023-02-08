/*
3*В переменных circle и square хранятся площади круга
и квадрата соответственно. Написать программу,
которая определяет, поместится ли круг в квадрат
*/

const {checkTheSquare} = require('./hw_2_ex3');

describe('testing checkTheSquare function: ',()=>{
    test("Should return inside for 2 and 7 ",()=>{
        expect(checkTheSquare(2,7)).toEqual('Inside');
    });
    test("Should return Outside for 5 and 3 ",()=>{
        expect(checkTheSquare(5,3)).toEqual('Outside');
    });
    test("Should return inside for 4 and 9 ",()=>{
        expect(checkTheSquare(4,9)).toEqual('Inside');
    });
})