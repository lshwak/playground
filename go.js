const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

let ans = [];
let arr = [];

for (let i=0; i<commands.length; i++) {
  arr = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b) => a - b);
  let a = commands[i][2]-1
  ans.push(arr[a]);
}
console.log(ans);






// const n = ["may", "kein", "kain", "radi"];
// const y = [5, 10, 1, 3];
// const p = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];

// let a = []
// let b


// for (let i = 0; i < p.length; i++) {
//   b = (n.filter(x => p[i].includes(x)))
//   console.log(b)
//   for (let j = 0; j < b.length; j++) {
//     //console.log(b[j])
//     for (let k = 0; k < n.length; k++) {
//       if (n[k] == b[j]) {
//         //console.log(n.indexOf(b[j]))
//       }
//     }
//   }
// }
// //console.log(a)
// //console.log(b.map(x => x))


// const arr = [1, 2, 3, 4, 5]
  
// arr.reduce(function (acc, cur, idx) {
//   console.log(acc, cur, idx);
//   return acc + cur;
// }, 0);













