function isPositive(number, resolve, reject) {
    setTimeout(()=>{
        if(typeof number === "number") {
            resolve(number >= 0 ? "양수" : "음수");
        } else {
            reject("NO number");
        }
    },2000);
}

function isPositiveP(number) {
    const executor = (resolve, reject) => {                         //실행자
        setTimeout(()=>{
            if(typeof number === "number") {                        //성공 -> resolve
                console.log(number);
                resolve(number >= 0 ? "양수" : "음수");
            } else {                                                //실패 -> reject
                reject("NO number..");
            }
        },2000);
    };
    const asyncTask = new Promise(executor);
    return asyncTask;
}
const res = isPositiveP(101);
res
    .then((res) => {
        console.log("작업 성공 : ",res);
    })
    .catch((err) => {
        console.log("작업 실패 : ", err);
    });



// isPositive(
//     10,
//     (res) => {
//         console.log("성공! : ", res);
//     },
//     (err) => {
//         console.log("실패.. : ", err);
//     }
// );

