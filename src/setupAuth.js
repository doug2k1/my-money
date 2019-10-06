const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

const setup = app => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
        callbackURL: `${process.env.SITE_URL}/auth/google/callback`
      },
      (accessToken, refreshToken, profile, done) => {
        const accountEmail = profile.emails.find(
          e => e.value === process.env.GOOGLE_OAUTH_ALLOWED_USER && e.verified
        );

        if (accountEmail) {
          return done(null, {
            id: profile.id,
            displayName: profile.displayName,
            photo: profile.photos ? profile.photos[0].value : null
          });
        }

        return done(null, false);
      }
    )
  );

  app.use(passport.initialize());
  app.use(passport.session());

  // routes
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};

module.exports = setup;
