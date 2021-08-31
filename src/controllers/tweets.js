const redisClient = require("../redisClient");
const TwitterClient = require("../TwitterClient");
const Tweet = require("../models/Tweet");

exports.fetchTweets = async (req, res, next) => {
    const { hashtag } = req.params;
    redisClient.get("rate_limit", (err, data) => {
        if (data > 450) {
            throw "the rate limit has been exceeded please try again soon"
        } else {
            TwitterClient.get('search/tweets', {
                q: `#${hashtag}`, count: 100,
                result_type: "mixed"
            }, function (error, tweets) {
                if (error) throw error.allErrors
                const formated_tweets = tweets.statuses.map(function (tweet) {
                    return (
                        new Tweet(tweet)
                    )
                })
                res.send(formated_tweets);
                redisClient.setex(hashtag, 360, JSON.stringify(formated_tweets));
                redisClient.setex("rate_limit", 900, isNaN(data) ? 1 : parseInt(data) + 1);
            })
        }

        return data
    })




};
