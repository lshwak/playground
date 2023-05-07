// 계산 하는 파일 칽

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// 계산 모듈을 내보내기
module.exports = {
    moduleName: "calc module",
    add: add,
    sub: sub
}