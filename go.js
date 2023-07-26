const num1 = 3;
const num2 = 6;
const my_string = 'i love you';
let answer = '';
let arr = [...my_string];

[arr[num1], arr[num2]] = [arr[num2], arr[num1]];

answer = arr.join("");

console.log(answer)