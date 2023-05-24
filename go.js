// https://school.programmers.co.kr/learn/courses/30/lessons/12926 프로그래머스 시저암호 

//65 ~ 90 & 97 ~ 122

let s = "a B z";
let n = 4;
let temp = 0;
let tem = 0;
let answer = '';

    for (i=0; i<s.length; i++) {
        tem = s[i].charCodeAt();
        if(65 <= tem && tem <= 90) {
            temp = tem + n;
            if (temp > 90) {
                temp -= 26;
            }
        } else if (97 <= tem && tem <= 122) {
            temp = tem + n;
            if (temp > 122) {
                temp -= 26;
            }
        } else {
            temp = tem;
        }
        answer += String.fromCharCode(temp);
    }
    
console.log(answer);

