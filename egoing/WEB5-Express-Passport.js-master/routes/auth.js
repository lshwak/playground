var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var sanitizeHtml = require('sanitize-html');
var template = require('../lib/template.js');
var db = require('../lib/db');


module.exports = function (passport) {
  router.get('/login', function (request, response) {
    var fmsg = request.flash();
    var feedback = '';
    if (fmsg.error) {
      feedback = fmsg.error[0];
    }
    var title = 'WEB - login';
    var list = template.list(request.list);
    var html = template.HTML(title, list, `
      <div style="color:red;">${feedback}</div>
      <form action="/auth/login_process" method="post">
        <p><input type="text" name="email" placeholder="email"></p>
        <p><input type="password" name="pwd" placeholder="password"></p>
        <p>
          <input type="submit" value="login">
        </p>
      </form>
    `, '');
    response.send(html);
  });

  // passport version
  router.post('/login_process',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/auth/login',
      failureFlash: true,
      successFlash: true
    }));

    router.get('/register', function (request, response) {
      var fmsg = request.flash();
      var feedback = '';
      if (fmsg.error) {
        feedback = fmsg.error[0];
      }
      var title = 'WEB - login';
      var list = template.list(request.list);
      var html = template.HTML(title, list, `
        <div style="color:red;">${feedback}</div>
        <form action="/auth/register_process" method="post">
          <p><input type="text" name="email" placeholder="email" value="egoing7777@gmail.com"></p>
          <p><input type="password" name="pwd" placeholder="password" value="111111"></p>
          <p><input type="password" name="pwd2" placeholder="password" value="111111"></p>
          <p><input type="text" name="displayName" placeholder="display name" value="egoing"></p>
          <p>
            <input type="submit" value="register">
          </p>
        </form>
      `, '');
      response.send(html);
    });

    router.post('/register_process', function (request, response) {
      var post = request.body;
      var email = post.email;
      var pwd = post.pwd;
      var pwd2 = post.pwd2;
      var displayName = post.displayName;
      if(pwd != pwd2){
        request.flash('error', 'Password must same!');
        response.redirect('/auth/register');
      } else {
        var user = {
          id:shortid.generate(),
          email:email,
          password:pwd,
          displayName:displayName
        }
        db.get('users').push(user).write();
        request.login(user, function(err){
          return response.redirect('/');
        })
      }
    });

  router.get('/logout', function (request, response) {
    request.logout();
    request.session.save(function () {
      response.redirect('/');
    });
  });
  /*
  logout했는데 logout이 안됬다고 뜨고 한참 있다가 reload하면 그제서야 logout이 될때가 있다.
  아마도 session에서도 destroy를 하고서 콜백함수를 통해서 실제로 session store에 대한 작업이 끝난 다음에 response.redirect를 호출하게 했던것과 비슷한 문제일듯.
  즉 passport에 logout하고 session을 지우는것까지 한 다음에 redirect한다.
  save는 현재 session의 상태를 session store에 저장하고 저장작업이 끝나면 redirect를 시키는 코드. destroy는 session을 지우는 것.
  */

  return router;
}