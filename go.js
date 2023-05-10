const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const b = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

answer = 0;
bnswer = 0;

// for (i=0; i <= 10; i++) {
//     answer += i;
// }

a.map((a) => answer+=a);
b.map(b => bnswer+=b);
answer = answer/a.length;
bnswer = bnswer/b.length;

console.log(answer.toFixed(1));
console.log(bnswer.toFixed(1));