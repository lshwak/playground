console.log(Math.round(1.6)); //2
console.log(Math.round(1.4)); //1

function sum(first, second) { // first, second 는 parameter(매개변수)라고 한다. 
    console.log('a');
    return first + second;
    console.log('b'); // 앞에 return을 만나면 함수는 그 즉시 종료가 되서 출력되지 않는다.
    // return은 어떤 값을 출력한다는 의미와 거기서 함수를 종료시킨다는 두가지 의미를 모두 가지고 있는 특수한 키워드.
}

console.log(sum(2,4)); // 각각의 입력값을 argument(인자)라고 한다. 




/*console.log(Math.round(1.6));
filwrite('result.txt', Math.round(1.6));
email('egoing@naver.com', Math.round(1.6));
filwrite, email 이 작동은 하지 않지만 각자 함수의 출력을 받아서 다양한 용도를 쓸 수도 있다. */
// sum의 결과를 순수히 값으로 출력할 수 있다면 훨씬 더 광범위 하게 응용 할 수 있을 것.



/*
round 함수는 반올림을 해주는 함수
round()에는 입력값이 있고 어떠한 메커니즘을 통해서 반올림은 해준다.
*/