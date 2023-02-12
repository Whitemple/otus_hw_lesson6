/*
1.Запросите у пользователя дату в формате
ДД.ММ.ГГГГ. Напишите программу, выводящую день
недели по введённой дате.

3.*В двух переменных хранятся даты рождения двух
пользователей в формате ДД.ММ.ГГГГ. Написать
программу, которая определяет более молодого
пользователя.
*/

const {showWeekDay} = require('./hw_8_ex1');

describe('Checking showWeekDay function: ',()=>{
    test("Expect Tuesday for entered date '20.07.1993' ",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "20.07.1993");
        expect(showWeekDay()).toBe("Вторник");
    });
    test("Expect Friday for entered date '31.12.2021' ",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "31.12.2021");
        expect(showWeekDay()).toBe("Пятница");
    });
    test("Expect Saturday for entered date '19.02.2022' ",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "19.02.2022");
        expect(showWeekDay()).toBe("Суббота");
    });
})

/*
2.Написать программу, которая выводит в консоль
количество минут, прошедшее с начала сегодняшнего
дня.
*/

const {showMinutsFromdayStart} = require('./hw_8_ex1');

describe('Testing showMinutsFromdayStart function: ', () => {
    test("Should be 320 minuts from the beginnig of the day", () => {
        expect(showMinutsFromdayStart()).toBe(320);
    });
    test("Should be 320 minuts from the beginnig of the day (now is 11:30", () => {
        expect(showMinutsFromdayStart()).toBe(320);
    });
    test("Should be 320 minuts from the beginnig of the day (now is 14:00)", () => {
        expect(showMinutsFromdayStart()).toBe(320);
    });
    test("Should be 320 minuts from the beginnig of the day (now is 21:20)", () => {
        expect(showMinutsFromdayStart()).toBe(320);
    });
})