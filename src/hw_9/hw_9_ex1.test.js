/*
1.Даны длины трёх сторон треугольника. Определить,
является ли треугольник прямоугольным.
*/

import { checkTriangle } from './hw_9_ex1.js';


describe('Cheaking right triangle or not: ',()=>{
    test("Expect right triangle or not in value 345",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "345");
        expect(checkTriangle()).toBeTruthy();
    });
    test("Expect right triangle or not in value 167",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "167");
        expect(checkTriangle()).toBeFalsy();
    });
    test("Expect right triangle or not in value 555",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "555");
        expect(checkTriangle()).toBeFalsy();
    });
})


/*
2.Пользователь вводит число R. Написать программу,
которая выведет в консоль длину окружности и
площадь круга с радиусом R.
*/
import { aboutCircle } from './hw_9_ex1.js';

describe('Cheaking right triangle or not: ',()=>{
    test("Expect right triangle or not in value 3",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "3");
        expect(aboutCircle()).toEqual('Длина окружности 19 и площадь круга 28');
    });
    test("Expect right triangle or not in value 5",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "5");
        expect(aboutCircle()).toEqual('Длина окружности 31 и площадь круга 79');
    });
    test("Expect right triangle or not in value 7",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "7");
        expect(aboutCircle()).toEqual('Длина окружности 44 и площадь круга 154');
    });
})