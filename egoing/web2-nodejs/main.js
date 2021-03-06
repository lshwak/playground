var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
// http, js, url 들은 모듈. node.js가 갖고있는 수 많은 기능들은 비슷한 것 끼리 그룹핑하는 것을 모듈이라고 한다.
var path = require('path');
var template = require('./lib/template.js');
var sanitizeHtml = require('sanitize-html');
// lib/template.js로 이동한 code
// {
//   HTML:function(title, list, body, control){
//     return `
//     <!doctype html>
//     <html>
//     <head>
//       <title>WEB1 - ${title}</title>
//       <meta charset="utf-8">
//     </head>
//     <body>
//       <h1><a href="/">WEB</a></h1>
//       ${list}
//       ${control}
//       ${body}
//     </body>
//     </html>
//     `;
//   }, list:function(filelist){
//     var list = '<ul>';
//     var i = 0;
//     while(i < filelist.length){
//       list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
//       i = i + 1;
//     }
//     list = list + '</ul>';
//     return list;
//   }
// }




var app = http.createServer(function(request,response){ // http를 통한 createSever메소드의 request, response 인자들..
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
          
          /*
          var list = templateList(filelist);
          var template = templateHTML(title, list, 
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a>`
            );
        // 웹 애플리케이션에서 정보를 다이나믹하게 프로그래밍적으로 생성한다. 제목부분은 title인 동적으로 만들었다.
        response.writeHead(200);
        response.end(template);
        */

        var list = template.list(filelist);
          var html = template.HTML(title, list, 
            `<h2>${title}</h2>${description}`,
            `<a href="/create">create</a>`
            );
        // 웹 애플리케이션에서 정보를 다이나믹하게 프로그래밍적으로 생성한다. 제목부분은 title인 동적으로 만들었다.
        response.writeHead(200);
        response.end(html);

        })

          
        // });
      } else {
        fs.readdir('./data', function(error, filelist){
          var filterdId = path.parse(queryData.id).base;
          fs.readFile(`data/${filterdId}`, 'utf8', function(err, description){
            var title = queryData.id;
            var sanitizeTitle = sanitizeHtml(title);
            var sanitizeDescription = sanitizeHtml(description, {
              allowedTags:['h1']
            });
            var list = template.list(filelist);
            var html = template.HTML(sanitizeTitle, list, 
              `<h2>${sanitizeTitle}</h2>${sanitizeDescription}`,
              `
              <a href="/create">create</a> 
              <a href="/update?id=${sanitizeTitle}">update</a>
              <form action="delete_process" method="post">
              <input type="hidden" name="id" value="${sanitizeTitle}">
              <input type="submit" value="delete">
              </form>
              `
              );
          // 웹 애플리케이션에서 정보를 다이나믹하게 프로그래밍적으로 생성한다. 제목부분은 title인 동적으로 만들었다.
          response.writeHead(200);
          response.end(html);
          });
        });
      }
    } else if (pathname === '/create') {
      fs.readdir('./data', function(error, filelist){
        var title = 'WEB - create';
        var list = template.list(filelist);
        var html = template.HTML(title, list, `
        <form action="http:/create_process" method="post">
          <p><input type="text" name="title" placeholder="title"></p>
          <p>
              <textarea name="description" id="" cols="30" rows="10" placeholder="description"></textarea>
          </p>
          <p>
              <input type="submit">
          </p>
        </form>
        `, '');
        response.writeHead(200);
        response.end(html);
      });
    } else if (pathname === '/create_process'){
      var body = '';
      request.on('data', function(data){
        body = body + data;
      });
      request.on('end', function(){
        var post = qs.parse(body);
        var title = post.title;
        var description = post.description;
        fs.writeFile(`data/${title}`, description, 'utf8', function(err){
          response.writeHead(302, {Location: `/?id=${title}`});
          response.end('success');
        });
      });
    } else if (pathname === '/update') {
      fs.readdir('./data', function(error, filelist){
        var filterdId = path.parse(queryData.id).base;
        fs.readFile(`data/${filterdId}`, 'utf8', function(err, description){
          var title = queryData.id;
          var list = template.list(filelist);
          var html = template.HTML(title, list, 
            `
            <form action="http:/update_process" method="post">
              <input type="hidden" name="id" value="${title}">
              <p><input type="text" name="title" placeholder="title" value="${title}"></p>
              <p>
                  <textarea name="description" id="" cols="30" rows="10" placeholder="description">${description}</textarea>
              </p>
              <p>
                  <input type="submit">
              </p>
            </form>
            `,
            `<a href="/create">create</a> <a href="/update?id=${title}">update</a>`
            );
        response.writeHead(200);
        response.end(html);
        });
      });
    } else if (pathname === '/update_process'){
      var body = '';
      request.on('data', function(data){
        body = body + data;
      });
      request.on('end', function(){
        var post = qs.parse(body);
        var id = post.id;
        var title = post.title;
        var description = post.description;
        fs.rename(`data/${id}`, `data/${title}`, function(error){
          fs.writeFile(`data/${title}`, description, 'utf8', function(err){
            response.writeHead(302, {Location: `/?id=${title}`});
            response.end('success');
          });
        });
      });
    } else if (pathname === '/delete_process'){
      var body = '';
      request.on('data', function(data){
        body = body + data;
      });
      request.on('end', function(){
        var post = qs.parse(body);
        var id = post.id;
        var filterdId = path.parse(id).base;
        fs.unlink(`data/${filterdId}`, function(error){
          response.writeHead(302, {Location: `/`});
          response.end('success');
        });
      });
    } else {
      response.writeHead(404);
      response.end('Not found');
    } 

});
app.listen(3000);