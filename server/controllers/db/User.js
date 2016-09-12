const db = require('../../db');
const logger = require('../../utils/logger');

exports.createUser = twitter_handle => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO users (twitter_handle, total_points) VALUES ($1, $2)', [twitter_handle, 0], (err, result) => {
      if (err) {
        logger.error('error making new user', err);
        reject(err);
      } else {
        logger.info('new user', twitter_handle);
        resolve(result);
      }
    });
  })
};

exports.checkIfUserExists = (twitter_handle) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT user_id FROM users WHERE twitter_handle=($1)', [twitter_handle], (err, result) => {
      if (err) {
        logger.error('error checking if user exists', err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
};
