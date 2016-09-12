const logger = require('../utils/logger');
const saveController = require('./saveController');

module.exports = (user, img, tweet) => {
  const havenondemand = require('havenondemand');
  const client = new havenondemand.HODClient(process.env.HAVEN);

  client.post('detectfaces', {url: img}, (err1, resp1, body1) => {
    if (err1) {
      logger.error(`Error occured during facial detection: ${err}`);
    }
    logger.info(`Face Detected for ${user.name}'s photo`);
    // Check if there was a face found
    if(body1.face.length){
      client.post('recognizeimages', {url: img, image_type: 'complex_3d'}, (err, resp, body) => {
        body.object.forEach(logo => {
          logger.info(`${logo.name} Logo Detected for ${user.name}'s photo`);
          // Find the brand id in the database
          saveController(user, img, tweet, logo);
        })
      });
    } else {
      logger.error('Haven: No face found.');
    }
  });
}