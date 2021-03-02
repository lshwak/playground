var http = require('http');
var fs = require('fs');
var url = require('url');
// http, js, url 들은 모듈. node.js가 갖고있는 수 많은 기능들은 비슷한 것 끼리 그룹핑하는 것을 모듈이라고 한다.

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    
    // console.log(_url); // 도메인의 querystring 값이 request.url에 반영되는 것을 확인하기. url안의 값을 추출하는 것을 통해서 원하는 값을 얻을 수 있다.
    // console.log(queryData.id);
    // console.log(url.parse(_url, true));

    // if(_url == '/'){
    //   title = 'Welcome';
    // }
    // if(_url == '/favicon.ico'){
    //   return response.writeHead(404);
    // }
    
    // console.log(__dirname + url);
    // response.end(fs.readFileSync(__dirname + _url));
    // 사용자가 요청,접근 할 때마다 자바스크립트를 통해 __dirname + url 이렇게 생긴 코드를 이용해서 우리가 읽어들여야 될 파일을 만들게 된 것.
    // fs.readFileSync() 명령어(node.js의 기능)에 값을 주면 node.js가 경로에 해당되는 파일을 읽어서 가져오는 것.
    if(pathname === '/') {
      if(queryData.id === undefined) { // queryData 와 undefined가 같다면 홈.
        // fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){

        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          
          /*
          var list = `<ul>
          <li><a href="?id=HTML">HTML</a></li>
          <li><a href="?id=CSS">CSS</a></li>
          <li><a href="?id=JavaScript">JavaScript</a></li>
        </ul>`
          */
          
          var list = '<ul>';
          var i = 0;
          while(i < filelist.length){
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
            i = i + 1;
          }
          list = list + '</ul>';

          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            ${list}
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
          `;
        // 웹 애플리케이션에서 정보를 다이나믹하게 프로그래밍적으로 생성한다. 제목부분은 title인 동적으로 만들었다.
        response.writeHead(200);
        response.end(template);

        })

          
        // });
      } else {
        fs.readdir('./data', function(error, filelist){
          var title = 'Welcome';
          var description = 'Hello, Node.js';
          var list = '<ul>';
          var i = 0;
          while(i < filelist.length){
            list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
            i = i + 1;
          }
          list = list + '</ul>';

          fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
            var title = queryData.id;
            var template = `
            <!doctype html>
            <html>
            <head>
              <title>WEB1 - ${title}</title>
              <meta charset="utf-8">
            </head>
            <body>
              <h1><a href="/">WEB</a></h1>
              ${list}
              <h2>${title}</h2>
              <p>${description}</p>
            </body>
            </html>
            `;
          // 웹 애플리케이션에서 정보를 다이나믹하게 프로그래밍적으로 생성한다. 제목부분은 title인 동적으로 만들었다.
          response.writeHead(200);
          response.end(template);
          });
        });
      }
    } else {
      response.writeHead(404);
      response.end('Not found');
    }

});
app.listen(3000);