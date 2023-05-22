// https://school.programmers.co.kr/learn/courses/30/lessons/12926 프로그래머스 시저암호 



//65 ~ 90 & 97 ~ 122
// tem = ((65 <= tem && tem <= 90) || (97 <= tem && tem <= 122)) ? 
// temp = tem + n : temp = tem;


let s = "a B z";
let n = 4;
let temp1 = 0;
let temp2 = 0;
let tem = 0;
let up = 0;
let low = 0;
let answer = '';

for (i=0; i<s.length; i++) {
    up = s[i].charCodeAt();
    low = s[i].charCodeAt();

    if(65 <= up && up <= 89) {
        temp1 = up + n;
    } else if (up == 90) {
        temp1 = up - 26 + n;
    } else if(up == 32) {
        temp1 = up;
    }

    if(97 <= low && low <= 121) {
        temp2 = low + n;
    } else if (low  == 122) {
        temp2 = low - 26 + n;
    }





    answer += String.fromCharCode();
    
}
console.log(temp1);
console.log(temp2);


console.log(answer);



// tem = s[i].charCodeAt();

// if((65 <= tem && tem <= 89) || (97 <= tem && tem <= 121)) {
//     temp = tem + n;
// } else if ((tem == 90)||(tem  == 122)) {
//     temp = tem - 26 + n;
// } else if(tem == 32) {
//     temp = tem;
// }
// answer += String.fromCharCode(temp);




// let eng = "ABC";
// let num1 = 65;
// let num2 = 66;
// let num3 = 67;


// console.log(eng.charCodeAt(0));
// console.log(eng.charCodeAt(1));
// console.log(eng.charCodeAt(2));
// console.log(String.fromCharCode(65));
















// let num1 = [1, 2, 3, 4, 5];
// let num2 = [1, 1, 1, 1, 1, 2];
// let num3 = [1, 0, 1, 1, 1, 3, 5];

// let temp = [];

// answer1 =
// answer2 = 
// answer3 = 

// console.log(answer1);
// console.log(answer2);
// console.log(answer3);