/*
2.Вывести в консоль таблицу умножения на 7.
7 x 1 = 7
7 x 2 = 14
…
7 x 9 = 63
*/

const showmultiplicationTable = () => {
    let arr=[];
    for (let i=1; i<10; i++){
        arr.push(`7*${i}=${7*i}`);
    }
    return arr;
}

module.exports={showmultiplicationTable};