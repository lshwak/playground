let score = 70;

score >= 90 ? console.log("A+") : score >=50 ? console.log("B") : console.log("F");

if (score >= 90) {
    console.log("A+");
} else if (score >= 50) {
    console.log("B");
} else {
    console.log("F");
}

//중첩삼항연산자는 가독성이 떨어질 수 있다. 삼항 연산자와 조건식의 가독성 차이를 염두해두며 사용할 것.