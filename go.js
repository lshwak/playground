


const n = ["may", "kein", "kain", "radi"];
const y = [5, 10, 1, 3];
const p = [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]];

let a = []
let b


for (let i = 0; i < p.length; i++) {
  b = (n.filter(x => p[i].includes(x)))
  console.log(b)
  for (let j = 0; j < b.length; j++) {
    //console.log(b[j])
    for (let k = 0; k < n.length; k++) {
      if (n[k] == b[j]) {
        //console.log(n.indexOf(b[j]))
      }
    }
  }
}
//console.log(a)
//console.log(b.map(x => x))













