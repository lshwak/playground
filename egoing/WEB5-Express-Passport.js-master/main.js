var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var compression = require('compression');
var helmet = require('helmet')
app.use(helmet());
var session = require('express-session')
var FileStore = require('session-file-store')(session)
var flash = require('connect-flash');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(compression());
app.use(session({
  secret: 'asadlfkj!@#!@#dfgasdg',
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}))
app.use(flash());

// var passport = require('./lib/passport')(app);

var authData = {
  email: 'egoing777@gmail.com',
  password: '111111',
  nickname: 'egoing'
};

var passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize()); // passport를 설치한거고 express가 호출될때마다 passport가 express에 개입된다.
app.use(passport.session());

// login에 성공했을 때 serialazUser메소드의 인자로 전달된 콜백함수가 호출 되도록 약속되어있다.
passport.serializeUser(function(user, done){
  console.log('serializeUser', user);
  done(null, user.email);
  // done(null, user.id); // 두번째 인자는 각각의 인자의 식별자.
});

passport.deserializeUser(function(id, done){
  console.log('deserializeUser', id);
  done(null, authData);
  // User.findById(id, function(err, user) {
  //   done(err, user);
  // });
});

  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'pwd'
    },
    function(username, password, done){
      console.log('LocalStrategy', username, password);
      if(username === authData.email){
        console.log(1);
        if(password === authData.password){
          console.log(2);
          return done(null, authData);
        } else {
          console.log(3);
          return done(null, false,{
            message: 'Incorrent password'
          });
        }
      } else {
        console.log(4);
        return done(null, false,{
          message: 'Incorrent username'
        });
      }
    }
  ));
  // false가 아닌 값은 javascript에선 true로 친다. 성공한 사용자의 정보는 무엇인지 passport에 알려주는것.

app.post('/auth/login_process',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login'
  }));
/* passport에 여러 전략 중 local은 username, password를 이용해서 login.
  local이 아닌 것은 페이스북이나 구글을 통해 로그인.
 */

app.get('*', function (request, response, next) {
  fs.readdir('./data', function (error, filelist) {
    request.list = filelist;
    next();
  });
});

var indexRouter = require('./routes/index');
var topicRouter = require('./routes/topic');
var authRouter = require('./routes/auth')(passport);

app.use('/', indexRouter);
app.use('/topic', topicRouter);
app.use('/auth', authRouter);

app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});