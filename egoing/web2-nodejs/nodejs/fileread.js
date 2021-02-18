var fs = require('fs'); // fs라는 변수를 통해서 node.js의 모듈인 파일시스템을 다룰 수 있게 된다. 


fs.readFile('sample.txt', 'utf-8', function(err, data){
    console.log(data);
});




