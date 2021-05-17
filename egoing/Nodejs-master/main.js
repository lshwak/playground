var express = require('express') // express도 결국 모듈.
var app = express() // express를 함수처럼 호출하고있다. express는 함수라는 뜻.
var fs = require('fs');
var qs = require('querystring');
var bodyParser = require('body-parser')
var compression = require('compression');
var template = require('./lib/template.js');
var topicRouter = require('./routes/topic');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.get('*', function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
});

app.use('/topic', topicRouter);

// get메소드는 route, routing 이라고 함.
// app.get('/', (req, res) => res.send('Hello World!')) // 최신코드지만 아래코드와 완벽히 같다. 
app.get('/', function(request, response) {
  var title = 'Welcome';
  var description = 'Hello, Node.js';
  var list = template.list(request.list);
  var html = template.HTML(title, list,
    `
    <h2>${title}</h2>${description}
    <img src="/images/hello.jpg" style="width:300px; display:block; margin-top:10px">
    `,
    `<a href="/topic/create">create</a>`
  );
  response.send(html);
});



app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});


/* 
// 아래 코드를 기반으로 재구성 할 예정

var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){
      if(queryData.id === undefined){
      } else {
      }
    } else if(pathname === '/create'){
    } else if(pathname === '/create_process'){
    } else if(pathname === '/update'){
    } else if(pathname === '/update_process'){
    } else if(pathname === '/delete_process'){
    } else {
      response.writeHead(404);
      response.end('Not found');
    }
});
app.listen(3000);
*/