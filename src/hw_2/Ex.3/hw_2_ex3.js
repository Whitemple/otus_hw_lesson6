/*
3*В переменных circle и square хранятся площади круга
и квадрата соответственно. Написать программу,
которая определяет, поместится ли круг в квадрат
*/

function checkTheSquare(r,a){
    const radius = Math.pow(r,2);
    const sSquare = Math.pow(a,2);
    const sCircle = Math.PI*radius;
    const result = (sCircle<=sSquare) ? 'Inside' : 'Outside';
    return result;
};

export {checkTheSquare};