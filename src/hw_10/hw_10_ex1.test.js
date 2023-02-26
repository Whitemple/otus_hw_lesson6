/*
Пользователь вводит текстовую строку. Определить с
помощью регулярного выражения, является ли
введённая строка:
1.Датой.
*/


const {cheackDate} = require('./hw_10_ex1');

describe('Cheaking with regular expression is entered value is date: ',()=>{
    test("Expect true when user entered 20.07.2022",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "20.07.2022");
        expect(cheackDate()).toBeTruthy();
    });
    test("Expect true when user entered 20.20.2022",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "20.20.2022");
        expect(cheackDate()).toBeFalsy();
    });
    test("Expect true when user entered 202.202.20223",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "202.202.20223");
        expect(cheackDate()).toBeFalsy();
    });
    test("Expect true when user entered 01.01.1993",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "20.07.2022");
        expect(cheackDate()).toBeTruthy();
    });
});

/*
Пользователь вводит текстовую строку. Определить с
помощью регулярного выражения, является ли
введённая строка:
2.Адресом электронной почты.
*/

const {cheackEmail} = require('./hw_10_ex1');

describe('Cheaking with regular expression is entered value is email: ',()=>{
    test("Expect true when user entered test@mail.ru",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "test@mail.ru");
        expect(cheackEmail()).toBeTruthy();
    });
    test("Expect true when user entered test@mail.ru.ry.ru",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "test@mail.ru.ry.ru");
        expect(cheackEmail()).toBeFalsy();
    });
    test("Expect true when user entered test@mail@test.ru",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "test@mail@test.ru");
        expect(cheackEmail()).toBeFalsy();
    });
    test("Expect true when user entered test23@mail.ru",()=>{
        jest.spyOn(window, "prompt").mockImplementation(() => "test23@mail.ru");
        expect(cheackEmail()).toBeTruthy();
    });
});