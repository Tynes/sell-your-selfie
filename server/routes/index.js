const logger = require('../utils/logger');
const passport = require('passport');
const pointController = require('../controllers/db/Point');

module.exports = app => {
  app.get('/auth/twitter', passport.authenticate('twitter'));

  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
      failureRedirect: '/',
      successRedirect: '/#/dashboard',
    }),
    (req, res) => {
      logger.info('successful authentication');
      res.json(req.user);
    }
  );

  app.get('/getpoints/:screen_name', (req, res) => {
    const screen_name = req.params.screen_name;
    pointController.retrieveUserPoints(screen_name)
    .then(results => res.send(results))
    .catch(error => res.sendStatus(500));
  });
};
