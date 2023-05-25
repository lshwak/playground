let age = 25;           // 정수
let tall = 175.9;       // 실수

let inf = Infinity;         // 무한대
let minusInf = -Infinity;   // 음의 무한데
let nan = NaN;              // 실패의 결과값

let name = "zunik";         // 쌍따옴표
let bboy = 'bboy';          // 작은 따옴표
let street = `hiphop ${bboy} ${name}`;      // 백틱 (변수의 값을 추가가능/ 템플릿 리터럴)

let isSwitchOff = false;

let a = null;

let A = 12;
let B = "2";

console.log( age + tall);
console.log( age * tall);
console.log(street);
console.log(a);
console.log(A * B);             // 묵시적 형변환, 캐스팅.
console.log(A + B);
console.log(A + parseInt(B));   // parseInt로 명시적 형변환.