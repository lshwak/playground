// 직사각형 넚이 구하기
const dots = [[1, 1], [5, 1], [5, 5], [1, 5]];

    let x = [];
    let y = [];
    let xb = 0;
    let xs = 0;
    let yb = 0;
    let ys = 0;
    for (i=0; i<dots.length; i++) {
        x.push(dots[i][0]);         // x 좌표만 배열로 추가
        y.push(dots[i][1]);         // y 좌표만 배열로 추가
    }
    xb = Math.max.apply(null,x)     // x 최대값
    xs = Math.min.apply(null,x)     // x 최소값
    yb = Math.max.apply(null,y)     // y 최대값
    ys = Math.min.apply(null,y)     // y 최소값
    
    console.log(((xb - xs) * (yb - ys))) // x길이 * y길이 == 넓이