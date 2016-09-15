# sell-your-selfie
API World Hackathon Project

## Overview
SellYourSelfie was designed as a proof-of-concept for a viral marketing incentive platform. The service creates a Twitter stream that monitors a hashtag, then runs matching tweet images through several APIs provided by HPE Haven OnDemand. First, it verifies the image is a selfie through facial recognition, then it runs it through image recognition against a dataset of over 760 brand images to identify which logos are present in the image. The user is then given reward points specific to that company. 

This idea is scalable to multiple hashtags, custom reward systems, and so on. 

## Requirements
- Node 6.+
- PostgreSQL
- Webpack 1.32

### Credentials
You need to sign up for both Twitter and HPE Haven OnDemand credentials. You can [create a Twitter app here](https://apps.twitter.com/) and [register as a Haven OnDemand developer here](https://www.havenondemand.com/signup.html). 


## Installation
- Clone the repo
- `$ npm install`
- Ensure PostgreSQL is running
- Run `$ npm run build:db` to create the neccessary database
- Run `$ npm run populate-db` to populate the brand's table
- Run `$ npm run build:js` to build the front end JS
	- Note that this will be in **watch** mode 	

### .env File
A large number of environmental variables are required for this operation. Create a .env file and populate it as such:

```
CONSUMER_KEY = 'FILL_ME_IN'
CONSUMER_SECRET = 'FILL_ME_IN'
ACCESS_TOKEN = 'FILL_ME_IN'
ACCESS_TOKEN_SECRET = 'FILL_ME_IN'
CALLBACK_URL = 'FILL_ME_IN'
HAVEN = 'FILL_ME_IN'
```

## Running
To run the application, simply use `$ npm start`. Please note that the connection to the Twitter stream will start with the server, so it isn't advised that you use Nodemon or other server change-detection software as you will exceed the Twitter stream cap quickly. 



