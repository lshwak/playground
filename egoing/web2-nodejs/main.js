var http = require('http');
var fs = require('fs');
var url = require('url');
// http, js, url 들은 모듈. node.js가 갖고있는 수 많은 기능들은 비슷한 것 끼리 그룹핑하는 것을 모듈이라고 한다.

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;
    // console.log(_url); // 도메인의 querystring 값이 request.url에 반영되는 것을 확인하기. url안의 값을 추출하는 것을 통해서 원하는 값을 얻을 수 있다.
    console.log(queryData.id);
    if(_url == '/'){
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    // console.log(__dirname + url);
    // response.end(fs.readFileSync(__dirname + _url));
    // 사용자가 요청,접근 할 때마다 자바스크립트를 통해 __dirname + url 이렇게 생긴 코드를 이용해서 우리가 읽어들여야 될 파일을 만들게 된 것.
    // fs.readFileSync() 명령어(node.js의 기능)에 값을 주면 node.js가 경로에 해당되는 파일을 읽어서 가져오는 것.

    var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="?id=HTML">HTML</a></li>
          <li><a href="?id=CSS">CSS</a></li>
          <li><a href="?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p><a href="https://www.w3.org/TR/html5/" target="_blank" title="html5 speicification">Hypertext Markup Language (HTML)</a> is the standard markup language for <strong>creating <u>web</u> pages</strong> and web applications.Web browsers receive HTML documents from a web server or from local storage and render them into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
        <img src="coding.jpg" width="100%">
        </p><p style="margin-top:45px;">HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects, such as interactive forms, may be embedded into the rendered page. It provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes and other items. HTML elements are delineated by tags, written using angle brackets.
        </p>
      </body>
      </html>
      `;
    // 웹 애플리케이션에서 정보를 다이나믹하게 프로그래밍적으로 생성한다. 제목부분은 title인 동적으로 만들었다.
    response.end(template);

});
app.listen(3000);