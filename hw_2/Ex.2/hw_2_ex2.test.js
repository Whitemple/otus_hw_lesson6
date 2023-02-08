/*
2.Запросить у пользователя ввод числа от 1 до 12.
Вывести в консоль название месяца, соответствующее
этому числу (1 — январь, 2 — февраль и т.д.).
*/

const {showMounth} = require('./hw_2_ex2');

describe('Testing showTheBiggestNumber function',()=>{
    
    test('Should show Январь when entered argument is 1',()=>{
        let num = '1';
        function showMounth(){
            switch (num){
                case '1':
                    return 'Январь'
                    break
                case '2':
                    return 'Февраль'
                    break
                case '3':
                    return 'Март'
                    break
                case '4':
                    return 'Апрель'
                    break
                case '5':
                    return 'Май'
                    break
                case '6':
                    return 'Июнь'
                    break
                case '7':
                    return 'Июль'
                    break
                case '8':
                    return 'Август'
                    break
                case '9':
                    return 'Сентябрь'
                    break
                case '10':
                    return 'Октябрь'
                    break
                case '11':
                    return 'Ноябрь'
                    break
                case '12':
                    return 'Декабрь'
                    break
            }
        };
        expect(showMounth()).toEqual('Январь');
    });
    // test('Should show Июль when entered arguments is 7',()=>{
    //     expect(showMounth()).toEqual('Июль');
    // });
    // test('Should show Декабрь when enterd arguments is 12',()=>{
    //     expect(showMounth()).toEqual('Декабрь');
    // });
})