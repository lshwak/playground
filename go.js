
    const my_string = "hello";
    const n = 3;
    let answer = '';
    
    for (let i=0; i<my_string.length; i++) {
        for (let j=0; j<n; j++) {
            answer += my_string[i];
        }
    }
    console.log(answer);

    // 굳이 배열로 형변환하고 push할 필요가 없었던 코드
    const mystr = "whatup";
    const m = 5;
    let ans = '';
    let arr = Array.from(mystr);
    let str = [];

    for(i=0; i<arr.length; i++) {
        for (j=1; j<=m; j++) {
            str.push(arr[i])    
        }
    }
    ans = str.toString().replace(/,/g,"");
    console.log(ans);