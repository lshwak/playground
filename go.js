// 1, 2, 3, 4 == 5,4
// 9, 2, 1, 3 == 29,6

let n1 = 1;
let n2 = 3;
let d1 = 2;
let d2 = 4;
let n = 0;
let d = 0;
let answer = [];

d = d1 * d2;
n = (d2 * n1) + (d1 * n2)

while ((n%2 == 0) && (d%2 == 0)) {
    n /= 2;
    d /= 2;
}

answer.push(n,d);
console.log(answer);