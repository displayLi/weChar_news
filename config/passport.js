
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {}

const connection = require('./mysql')


opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

opts.secretOrKey = 'secret';

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {

        connection.query(`SELECT * FROM users WHERE id=${jwt_payload.id}`, (err, result, field) => {

            if (err) return done(err, false);

            if (result) {
                return done(null, result);
            } else {
                return done(null, false);
            }
        })
    }));
}