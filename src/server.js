require('dotenv').config()
const express = require('express');
const tweetController = require("./controllers/tweets")
const cacheController = require("./controllers/cache")
const errorController = require("./controllers/error")

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/tweets/:hashtag', cacheController.cache, tweetController.fetchTweets);

app.get("/", async (req, res) => {
  res.send("/api/glisser/");
});

app.use(errorController.getError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

module.exports = app