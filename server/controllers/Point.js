const db = require('../db');
const logger = require('../utils/logger');

exports.updatePoint = (data, cb) => {
  const { user_id, brand_id, points } = data;
  db.query('SELECT * FROM points WHERE user_id=$1 AND brand_id=$2', [user_id, brand_id], (err, result) => {
    if (err) {
      logger.error('error making new points', err);
      cb(err, null);
    } else if(!result.rows[0]){
      logger.info('new points', data);
      // Return null if unable to update
      cb(null, null);
    } else {
      // Found entry, update
      let totalPoints = points + result.rows[0].points;
      db.query('UPDATE points SET points=$1 WHERE user_id=$2 AND brand_id=$3', [totalPoints, user_id, brand_id], (err, result) => {
        if (err) {
          logger.error('error updating points', err);
          cb(err, null);
        } else {
          logger.info('new points', data);
          cb(null, result.rows);
        }
      });
    }
  });
}

exports.createPoint = (data, cb) => {
  const { user_id, brand_id, points } = data;
  db.query('INSERT INTO points (user_id, brand_id, points) VALUES ($1, $2, $3)', [user_id, brand_id, points], (err, result) => {
    if (err) {
      logger.error('error making new points', err);
      cb(err, null);
    } else {
      logger.info('new points', data);
      cb(null, result);
    }
  });
}

exports.retrieveUserPoints = (twitter_handle, cb) => {
  logger.info('checking twitter handle', twitter_handle);
  db.query('SELECT * FROM points LEFT JOIN brands on points.brand_id = brands.brand_id WHERE user_id=(SELECT user_id FROM users WHERE twitter_handle=$1)', [twitter_handle], (err, result) => {
    if (err) {
      logger.error('error checking if user exists', err);
      cb(err, null);
    } else {
      logger.info('no lookup error!', result.rows);
      cb(null, result.rows);
    }
  });
};