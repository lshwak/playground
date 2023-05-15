
let stick = 12000;
let drink = 2000;

const n1 = 10;
const k1 = 3;
let count1 = 0;

const n2 = 64;
const k2 = 6;
let count2 = 0;

let answer = 0;

for (i=1; i <= n1; i ++) {
    for (j=1; j <= k1; j++) {
        a = drink * k1;
    }
    b = stick*i;
    if (i % 10 == 0) {
        count1++;
    }
}

console.log(count1);
console.log("꼬치 : "+b);
console.log("음료 : "+a);
console.log(b+(a-(count1*drink)));


for (i=1; i <= n2; i ++) {
    for (j=1; j <= k2; j++) {
        c = drink * k2;
    }
    d = stick*i;
    if (i % 10 == 0) {
        count2++;
    }
}
console.log(count2);
console.log("꼬치 : "+d);
console.log("음료 : "+c);
console.log(d+(c-(count2*drink)));





let k = 10;
let n = 3;
    k-=~~(n/10);
    if (k < 0) k= 0;
answer = n*12000+k*2000;
console.log("다른사람 풀이 : "+answer);
