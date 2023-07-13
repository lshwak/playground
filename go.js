const array = [1, 9, 10, 11, 8];
let h = Math.max(...array);
let idx = array.indexOf(h);

const answer = [];
answer.push(h,idx)

console.log(h)
console.log(idx)

console.log(answer)