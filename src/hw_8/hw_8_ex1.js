/*
1.Запросите у пользователя дату в формате
ДД.ММ.ГГГГ. Напишите программу, выводящую день
недели по введённой дате.
2.Написать программу, которая выводит в консоль
количество минут, прошедшее с начала сегодняшнего
дня.
3.*В двух переменных хранятся даты рождения двух
пользователей в формате ДД.ММ.ГГГГ. Написать
программу, которая определяет более молодого
пользователя.
*/

const showWeekDay = () => {
    const days = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота'
    ];
    const enteredDate = prompt("Enter date in the format dd.mm.yyyy: ");
    const [day, mounth, year] = enteredDate.split('.');
    const myDate = new Date(`${year}-${mounth}-${day}`);
    const nameOfDay = myDate.getDay();
    return days[nameOfDay];
}

const showMinutsFromdayStart = (nowDay) => {
    const minutsPast = nowDay.getMinutes();
    const hoursPast = nowDay.getHours();
    const result = minutsPast+(hoursPast*60);
    return result;
}

export {showWeekDay, showMinutsFromdayStart};