/*
3*В переменных circle и square хранятся площади круга
и квадрата соответственно. Написать программу,
которая определяет, поместится ли круг в квадрат
*/

function checkTheSquare(r,a){
    const radius = Math.pow(r,2);
    const sSquare = Math.pow(a,2);
    const sCircle = Math.PI*radius;
    if(sCircle<=sSquare){
        return 'Inside';
    }
    else{
        return 'Outside';
    }
};

module.exports={checkTheSquare};