require('dotenv').config()
const Twit = require('twit');

const TwitterClient = new Twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    app_only_auth: true,
});

module.exports = TwitterClient