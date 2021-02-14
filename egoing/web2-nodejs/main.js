var http = require('http');
var fs = require('fs');
var url = require('url');
// http, js, url 들은 모듈. node.js가 갖고있는 수 많은 기능들은 비슷한 것 끼리 그룹핑하는 것을 모듈이라고 한다.

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    // console.log(_url); // 도메인의 querystring 값이 request.url에 반영되는 것을 확인하기. url안의 값을 추출하는 것을 통해서 원하는 값을 얻을 수 있다.
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    // console.log(__dirname + url);
    // response.end(fs.readFileSync(__dirname + _url));
    // 사용자가 요청,접근 할 때마다 자바스크립트를 통해 __dirname + url 이렇게 생긴 코드를 이용해서 우리가 읽어들여야 될 파일을 만들게 된 것.
    // fs.readFileSync() 명령어(node.js의 기능)에 값을 주면 node.js가 경로에 해당되는 파일을 읽어서 가져오는 것.
    response.end(queryData.id);

});
app.listen(3000);