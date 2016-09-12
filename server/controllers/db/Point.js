const db = require('../../db');
const logger = require('../../utils/logger');

exports.updatePoint = data => {
  const { user_id, brand_id, points } = data;
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM points WHERE user_id=$1 AND brand_id=$2', [user_id, brand_id], (err, result) => {
      if (err) {
        logger.error('error making new points', err);
        reject(err);
      } else if(!result.rows[0]){
        logger.info('new points', data);
        // Return null if unable to update
        resolve(null);
      } else {
        // Found entry, update
        let totalPoints = points + result.rows[0].points;
        db.query('UPDATE points SET points=$1 WHERE user_id=$2 AND brand_id=$3', [totalPoints, user_id, brand_id], (err, result) => {
          if (err) {
            logger.error('error updating points', err);
            reject(err);
          }
          logger.info('new points', data);
          resolve(result.rows);
        });
      }
    });
  });
}

exports.createPoint = (data, cb) => {
  const { user_id, brand_id, points } = data;
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO points (user_id, brand_id, points) VALUES ($1, $2, $3)', [user_id, brand_id, points], (err, result) => {
      if (err) {
        logger.error('Error making new points', err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    });
  });
}

exports.retrieveUserPoints = (twitter_handle, cb) => {
  logger.info('checking twitter handle', twitter_handle);
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM points LEFT JOIN brands on points.brand_id = brands.brand_id WHERE user_id=(SELECT user_id FROM users WHERE twitter_handle=$1)', [twitter_handle], (err, result) => {
      if (err) {
        logger.error('error checking if user exists', err);
        reject(err);
      }

      logger.info('no lookup error!', result.rows);
      resolve(result.rows);
    });
  });
};