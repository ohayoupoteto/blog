let array = [5, 3, 1, 5, 4];
array.push(100);
array.unshift(80);

console.log(array.indexOf(5));/*5の位置を返す*/
array.push(4);
array.pop();

delete (array[0]);/*deleteは引数に配列を。*/

let a = array.slice(2); /*2番目以降(含む)*/
a = array.slice(1, 2) /*開始位置と終了位置*/

console.log(a);
array.forEach((a) => {
    console.log(a);
});
console.log(array.filter((a) => {
    return a > 2

}))
let array2 = array.map((a) => {
    return a * 2;
});
console.log(array2);

for (let i = 0; i < 14; i++) {
    console.log(array[i]);
}

/*indexOf,join,slice,filter,map,forEach */