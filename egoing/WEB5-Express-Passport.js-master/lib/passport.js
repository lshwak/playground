// main.js의 app은 외부에 의존하고있다. passport.js 안으로 주입.
// 함수를 외부로 export. passport.js는 함수 자체

var db = require('../lib/db');

module.exports = function (app) {
    // var authData = {
    //     email: 'egoing777@gmail.com',
    //     password: '111111',
    //     nickname: 'egoing'
    //   };

    var passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        console.log('serializeUser', user);
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        var user = db.get('users').find({id:id}).value();
        console.log('deserializeUser', id, user);
        done(null, user);
    });

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'pwd'
        },
        function (email, password, done) {
            console.log('LocalStrategy', email, password);
            var user = db.get('users').find({email:email, password:password}).value();
            if(user){
                return done(null, user, {
                    message: 'Welcome.'
                });
            } else {
                return done(null, false, {
                    message: 'Incorrect user information.'
                });
            }
            // if (email === authData.email) {
            //     if (password === authData.password) {
            //         return done(null, authData, {
            //             message: 'Welcome.'
            //         });
            //     } else {
            //         return done(null, false, {
            //             message: 'Incorrect password.'
            //         });
            //     }
            // } else {
            //     return done(null, false, {
            //         message: 'Incorrect username.'
            //     });
            // }
        }
    ));
    return passport;
}