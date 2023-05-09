let a = 10;
let b = 4;
let answer = 0;

for (i=1; i <= a; i++) {
    // if (i % 2 == 0){
    //     answer += i;
    // }
    i % 2 == 0 ? answer += i :  answer+=0 ;
}
console.log(answer);