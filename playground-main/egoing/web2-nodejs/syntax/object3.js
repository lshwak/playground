
var o = {
    v1:'v1',
    v2:'v2',
    f1:function(){
        console.log(this.v1);
    },
    f2:function(){
        console.log(this.v2);
    }
}
// 함수가 객체 안에서 사용될 때 함수가 자신이 속해있는 객체를 참조 할 수 있는 특수한 약속 this라는 키워드를 쓴다.

o.f1();
o.f2();

