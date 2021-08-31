require('dotenv').config()
const redis = require('redis');
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);
const redisClient = (function () {
    client.on("error", function (error) {
        return false
    });
    return client

})()

module.exports = redisClient;