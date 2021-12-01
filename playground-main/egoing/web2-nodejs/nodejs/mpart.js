var M = {
    v:'v',
    f:function(){
        console.log(this.v);
    }
}

// 모듈이 담겨있는 mpart.js에 있는 여러기능중에서 M이 가르키는 객체를 이 모듈 바깥에서 사용할 수 있도록 export하겠다.
module.exports = M;