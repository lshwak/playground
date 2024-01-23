const brown = 10;
const yellow = 2;

  var answer = [];
    for (var y = 3; y <= (brown+yellow)/y; y++) {
        var x = Math.floor((brown+yellow)/y);
        if( (x-2)*(y-2)=== yellow) {
            break;
        }
    }
 
    answer.push(x,y)
    
console.log(answer);



//const s = "3people unFollowed me";
// var answer = '';
// let result = s.split(' ');

// let result2 = result.map(x=> x.charAt(0).toUpperCase() + x.slice(1));

// answer = result2.join(" ")

// console.log(answer)

















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






















// const num1 = 3;
// const num2 = 6;
// const my_string = 'i love you';

// let answer = '';
// let arr = [...my_string];

// [arr[num1], arr[num2]] = [arr[num2], arr[num1]];

// answer = arr.join("");

// console.log(answer);