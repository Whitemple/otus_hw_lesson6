/*
Сверстать страницу и подключить к ней файл со
скриптом. На странице должны быть три текстовых
параграфа, поле ввода и кнопка. Напишите скрипт,
который будет выполнять следующие условия:
1.Кнопка скрыта, если в поле ввода нет значения.
2.При клике на кнопку добавляется новый параграф,
содержащий текст из поля ввода.
*/

const {domFunction} = require('./hw_7_ex1');

describe("Create DOM and testing function domFunction: ", ()=>{
    let el;
    beforeEach(() => {
        el = document.createElement("div");
        domFunction(el);
    });

    test("create basic markup", () => {
        expect(el.querySelector(".p1")).toBeTruthy();
        expect(el.querySelector(".p2")).toBeTruthy();
        expect(el.querySelector(".p3")).toBeTruthy();
        expect(el.querySelector(".input")).toBeTruthy();
        expect(el.querySelector(".button")).toBeTruthy();
    });
    
    test("Button should be visible if input has a value", () => {
      let inputEl = el.querySelector(".input");
      inputEl.value = '123';
      let btn = el.querySelector(".button");
      btn.style.display='block';
      expect(el.querySelector(".input").value).toBe('123');
      expect(btn.style.display).toBe("block");
    });

    test("Add new paragraph when click the button",()=>{
        el.querySelector("input").value='This is a new paragraph';
        el.querySelector("button").click();
        expect(el.querySelectorAll("p").length).toBe(4);
        expect(el.querySelectorAll("p")[3].innerText).toBe('This is a new paragraph');
    })

})