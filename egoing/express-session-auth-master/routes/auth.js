var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');

var authData = {
  email: 'abc@naver.com',
  password: '1234',
  nickname: 'egoing'
} // 비밀번호가 소스코드에 있으면 이 소스코드를 공개했을 때 비밀번호가 딸려갈 수 있기때문에 비밀번호를 소스코드 바깥으로 뺄 수 있는 방안을 모색해야한다. 

router.get('/login', function (request, response) {
  var title = 'WEB - login';
  var list = template.list(request.list);
  var html = template.HTML(title, list, `
    <form action="/auth/login_process" method="post">
      <p><input type="text" name="email" placeholder="email"></p>
      <p><input type="password" name="pwd" placeholder="password"></p>
      <p>
        <input type="submit" value="login">
      </p>
    </form>
  `, '');
  response.send(html);
}); // login을 눌렀을 때 login_process로 이동하는것을 확인.

router.post('/login_process', function (request, response) {
  var post = request.body;
  var email = post.email;
  var password = post.pwd;
  if(email === authData.email && password === authData.password){
    request.session.is_logined = true;
    request.session.nickname = authData.nickname;
    request.session.save(function(){
      response.redirect(`/`);
    });
  } else {
    response.send('Who?');
  }
});

router.get('/logout', function (request, response) {
  request.session.destroy(function(err){
    response.redirect('/');
  });
});

module.exports = router;