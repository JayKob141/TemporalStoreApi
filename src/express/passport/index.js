var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;
var Presenter = require('../../presenter');


passport.use(new Strategy(
    function(token, cb) {
        var promise = Presenter.readUserByAuthToken(token);
        promise.then(user=>{
            return cb(null, user);
        }).catch(error=>{
            return cb(error);
        })
    }
));

module.exports = passport;