const passport = require('passport');
const JWT = require('jsonwebtoken');
const PassportJWT = require('passport-jwt');
const User = require('../models/User');
const config = require('config');

const jwtSecret = config.get('jwtSecret');


passport.use(User.createStrategy());

const signUp = (req, res, next) => {
  if (!req.body.email || !req.body.password || req.file === undefined || req.file === null ) {
    res.status(400).send('No email or password provided.');
  }
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    role: req.body.role,
    userImage: req.file.path
  });

  User.register(user, req.body.password, (error, user) => {
    if (error) {
      next(error);
      return;
    }
  });

  req.user = user;
  next();
};

const signJWTForUser = (req, res) => {
  const user = req.user;
  const token = JWT.sign(
    {
      email: user.email
    },
    jwtSecret,
    {
      algorithm: 'HS256',
      expiresIn: '1h',
      subject: user._id.toString()
    }
  );
  res.json({ token });
};

passport.use(
  new PassportJWT.Strategy(
    {
      jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret,
      algorithms: ["HS256"]
    },
    (payload, done) => {
      User.findById(payload.sub)
        .then(user => {
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        })
        .catch(error => {
          done(error, false);
        });
    }
  )
);

module.exports = {
  initialize: passport.initialize(),
  signUp,
  signIn: passport.authenticate('local', { session: false }),
  requireJWT: passport.authenticate('jwt', { session: false }),
  signJWTForUser
};
