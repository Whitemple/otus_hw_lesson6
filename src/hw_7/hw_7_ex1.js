/*
Сверстать страницу и подключить к ней файл со
скриптом. На странице должны быть три текстовых
параграфа, поле ввода и кнопка. Напишите скрипт,
который будет выполнять следующие условия:
1.Кнопка скрыта, если в поле ввода нет значения.
2.При клике на кнопку добавляется новый параграф,
содержащий текст из поля ввода.
3.*Если параграфов становится больше 5, первый из
них удаляется.
*/

const domFunction = (el) => {
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const input = document.createElement("input");
  const button = document.createElement("button");

  p1.classList.add("p1");
  p2.classList.add("p2");
  p3.classList.add("p3");
  input.classList.add("input");
  button.classList.add("button");

  el.append(p1);
  el.append(p2);
  el.append(p3);
  el.append(input);
  el.append(button);

  input.addEventListener("input", () => {
    if (input.value === "") {
      button.style.display = "none";
    } else {
      button.style.display = "block";
    }
  });
  button.addEventListener("click", () => {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = input.value;
    el.append(newParagraph);
  });
};

export { domFunction };
