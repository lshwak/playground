var express = require('express')
var parseurl = require('parseurl')
var session = require('express-session')

var app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false, // session 데이터가 바뀌기 전까지는 session저장소의 값을 바꾸지 않는다. true면 유무 상관없이 저장.
  saveUninitialized: true // session이 필요하기 전까지 session을 구동시키지 않는다. false면 유무 상관없이 무조건 구동.
}))


app.get('/', function (req, res, next) {
  res.send('Hello Session')
})

app.get('/bar', function (req, res, next) {
  res.send('you viewed this page ' + req.session.views['/bar'] + ' times')
})

app.listen(3000, function(){
    console.log('3000!')
});