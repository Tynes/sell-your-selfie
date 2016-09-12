const db = require('../../db');
const logger = require('../../utils/logger');

exports.getBrandId = brand => {
  return new Promise((resolve, reject) => {
    db.query('SELECT brand_id FROM brands WHERE name=$1', [brand], (err, result) => {
      if (err) {
        logger.error('error getting brand ID', err);
        reject(err);
      } else {
        logger.info('Retrieved brand ID: ', brand);
        resolve(result);
      }
    });
  });
};