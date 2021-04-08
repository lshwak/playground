var mysql = require('mysql2'); // mysql이라는 모듈을 mysql이라는 변수를 통해서 사용선언
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'opentutorials'
});

connection.connect(); // connection객체에 connect메소드 호출하면 접속될것.

connection.query('SELECT * FROM topic', function (error, results, fields){
    if (error) {
        console.log(error);
    }
    console.log(results);
});

connection.end();
