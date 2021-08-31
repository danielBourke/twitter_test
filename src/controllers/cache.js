const redisClient = require("../redisClient");

exports.cache = (req, res, next) => {
  const { hashtag } = req.params;
  if (!redisClient.connected) {
    throw "there is no redis client running"
  }
  redisClient.get(hashtag, (err, data) => {
    if (err) {
      throw err;
    }
    if (data !== null) {
      res.send(JSON.parse(data));
    } else {
      next()
    }
  }
  )
}
