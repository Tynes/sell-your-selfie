const logger = require('../utils/logger');
const User = require('./db/User');
const Tweet = require('./db/Tweet');
const Brand = require('./db/Brand');
const Point = require('./db/Point');

module.exports = (user, img, tweet, logo) => {
  let brand_id, user_id;
  Brand.getBrandId(logo.name)
  .then(result => {
    brand_id = result.rows[0].brand_id;
    return User.checkIfUserExists(user.screen_name)
  })
  .then(result => {
    if (result[0]) {
      // User exists, pass along the result
      user_id = result[0].user_id;
      return new Promise((resolve) => resolve(result));
    } else if (!result[0]) {
      // User does not exist
      return User.createUser(user.screen_name)
      .then(result => User.checkIfUserExists(user.screen_name))
      .then(result => {
        user_id = result[0].user_id;
        return new Promise((resolve) => resolve(result)); 
      })
    } else {
      console.log(result);
      return new Promise((resolve, reject) => reject(result));
    }
  })
  .then(result => {
    return Tweet.addTweet({ 
      user_id, 
      brand_id, 
      message: tweet.message, 
      image_url: img
    });
  })
  .then(result => {
    return Point.updatePoint({
      user_id,
      brand_id,
      points: 10
    });
  })
  .then(result => {
    if(!result) {
      Point.createPoint({
        user_id,
        brand_id,
        points: 10
      })
      .then(result => console.log(result));
    } else {
      console.log(result);
    }
  })
  .catch(error => logger.error(error));
}