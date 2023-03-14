/*
2.Запросить у пользователя ввод числа от 1 до 12.
Вывести в консоль название месяца, соответствующее
этому числу (1 — январь, 2 — февраль и т.д.).
*/

import { showMounth } from './hw_2_ex2.js';

describe('Testing showTheBiggestNumber function',()=>{
    test('Should show Январь when entered argument is 1',()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "1");
        expect(showMounth()).toEqual('Январь');
    });
    test('Should show Июль when entered arguments is 7',()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "7");
        expect(showMounth()).toEqual('Июль');
    });
    test('Should show Декабрь when enterd arguments is 12',()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "12");
        expect(showMounth()).toEqual('Декабрь');
    });
})