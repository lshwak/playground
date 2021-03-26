// 프로그래밍을 한다는것은 1.데이터, 2.데이터처리로 크게 이루어져있다.
//함수는 처리해야될 일에대한 어떤 정보를 담고있는 일종의 구문. statement라고 할수있으면서 값이다. 함수를 변수에 넣을수 있으면 값 넣을수 없다면 값X
 var f = function(){
    console.log(1+1);
    console.log(1+2);
 }

var a = [f];
a[0](); // 배열의 원소로 함수존재.

var o = {
    func:f
}
o.func();

// javascript에서는 function이란 statement가 다른 statement와는 달리 값이 될 수 있다. 즉, 처리방법들을 담고있는 구문이면서 동시에 자체가 값이 될 수 있다.
// javascript에서 배열가 객체는 모두 서로 연관된 데이터를 담는 그릇. 처리방법을 그루핑하는 함수 조차도 데이터이기도 하기 때문에 배열과 객체에도 담을 수 있다.

// var i = if(true){console.log(1)}; javascript에서는 조건문이 값이 아니기때문에 에러
//var w = while(true){console.log(1)};








