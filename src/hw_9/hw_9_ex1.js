const checkTriangle = () => {
    const arr = prompt("Enter 3 numbers: ");
    const [a, b, c] = arr.split('');
    if((a*a)+(b*b)==c*c){
        return true;
    } else{
        return false;
    }
}

const aboutCircle = () =>{
    const r = prompt('Enter radius: ');
    const p = 2*Math.PI*r
    const s = Math.PI*(r*r);
    const result = `Длина окружности ${Math.round(p)} и площадь круга ${Math.round(s)}`
    return result;
}



export {checkTriangle, aboutCircle};