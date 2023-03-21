function taskA(a, b, cb) {                      
    setTimeout(()=>{
        const res = a + b;                     
        cb(res);
    },3000)                                     
}
function taskB(a, cb) {
    setTimeout(()=> {
        const res = a * 2;
        cb(res);
    }, 1000);
}
function taskC(a, cb) {
    setTimeout(()=> {
        const res = a * -1;
        cb(res);
    },2000);
}
taskA(4, 5, (a_res) => {                          
    console.log("A RESULT : ", a_res);
    taskB(a_res, (b_res)=> {
        console.log("B RESULT : ", b_res);
        taskC(b_res, (c_res)=> {
            console.log("C RESULT : ", c_res);
        })
    })
});
console.log("작업 수행 끝");