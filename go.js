const n = ["may", "kein", "kain", "radi"];
const y = [5, 10, 1, 3];
const p = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];

let a = []
let b

for (let i = 0; i < p.length; i++) {
  b = (n.filter(x => p[i].includes(x)))
  console.log(b)
  for (let j = 0; j < b.length; j++) {
    console.log(b[j])
    for (let k = 0; k < n.length; k++) {
      
    }
  }
}
//console.log(a)







//console.log(b.map(x => x))






















// const num1 = 3;
// const num2 = 6;
// const my_string = 'i love you';

// let answer = '';
// let arr = [...my_string];

// [arr[num1], arr[num2]] = [arr[num2], arr[num1]];


// answer = arr.join("");

// console.log(answer);