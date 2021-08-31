# NodeJs twitter API test

NodeJs twitter API test is a simple application that returns tweets that contain certain hashtags. It allows users to search for the recent tweets on hashtags.

The project is split into two parts:
1. [GET tweets/:hashtag]
To search for the recent tweets that have the #events visit http://localhost:8080/tweets/events either in postman or in a browser window only certain properties have been included in the tweet such as id, text etc. 
2. [Rate limiting]
Redis has been used in-order to cache tweets tweets for a particular hashtag are only stored for a short period of time before being deleted this to prevent overuse of the twitter api but also make sure that what is being stored in redis is up to date.

***

## Testing

testing is using mocha which runs an instance of the app so make sure you keep redis working but shut down any instances of the express app. in-order to test close the app down and run npm test.

## Getting Setup

make sure redis is installed on your local machine and running. This can be done with the command:

redis-server

create a .env file at the root of your project and set the twitter api and port values. Like bellow: 

TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=
TWITTER_BEARER_TOKEN=
PORT=8080
REDIS_PORT=6379

## Running the Server Locally
To run the server locally in developer mode, open terminal and run:

npm start

you can access the service using local host in your browser or by using postman.

In the example bellow we search for the tweets using the #events.

http://localhost:8080/tweets/events
