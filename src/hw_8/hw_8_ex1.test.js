/*
1.Запросите у пользователя дату в формате
ДД.ММ.ГГГГ. Напишите программу, выводящую день
недели по введённой дате.
*/

import { showWeekDay } from './hw_8_ex1.js';

describe('Checking showWeekDay function: ',()=>{
    test("Expect Tuesday for entered date 20.07.1993 ",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "20.07.1993");
        expect(showWeekDay()).toEqual("Вторник");
    });
    test("Expect Friday for entered date '31.12.2021' ",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "31.12.2021");
        expect(showWeekDay()).toEqual("Пятница");
    });
    test("Expect Saturday for entered date '19.02.2022' ",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "19.02.2022");
        expect(showWeekDay()).toEqual("Суббота");
    });
})

/*
2.Написать программу, которая выводит в консоль
количество минут, прошедшее с начала сегодняшнего
дня.
*/

import { showMinutsFromdayStart } from './hw_8_ex1.js';

describe('Testing showMinutsFromdayStart function: ', () => {

    test("Should be 765 minuts from the beginnig of the day (now is 11:30)", () => {
        const nowDay = new Date('2022-04T11:30');
        expect(showMinutsFromdayStart(nowDay)).toBe(690);
    });
    test("Should be 320 minuts from the beginnig of the day (now is 14:00)", () => {
        const nowDay = new Date('2022-04T14:00');
        expect(showMinutsFromdayStart(nowDay)).toBe(840);
    });
    test("Should be 733 minuts from the beginnig of the day (now is 21:20)", () => {
        const nowDay = new Date('2022-04T21:20');
        expect(showMinutsFromdayStart(nowDay)).toBe(1280);
    });
})