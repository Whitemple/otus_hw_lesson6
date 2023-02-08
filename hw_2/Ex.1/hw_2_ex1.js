/*
1.В переменных a и b хранятся числа. Вывести в
консоль наибольшее из них.
*/

const showTheBiggestNumber=(num1, num2)=>{
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    };
}

module.exports={showTheBiggestNumber};