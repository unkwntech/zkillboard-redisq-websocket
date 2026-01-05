# zKillboard RedisQ Websocket Relay

A simple websocket relay for the zKillboard [RedisQ](https://github.com/zKillboard/RedisQ) data feed.

## Hosting

* Install [NodeJS](https://nodejs.org/en/download) (Only tested against v24 and higher)
* Clone the repository `git clone https://github.com/unkwntech/zkillboard-redisq-websocket.git`
* Change to the new directory `cd zkillboard-redisq-websocket`
* Install prerequisites `npm i`
* Clone SAMPLE.env to .env `cp SAMPLE.env .env`
* Edit .env, add a queue id.
* Build the project `tsc -b`
* Run the websocket server `node dist/main.js`

> [!TIP]
> Using a process manager like [PM2](https://www.npmjs.com/package/pm2) is strongly recommended.  A default ecosystem file (ecosystem.config.js) is provided for PM2.
