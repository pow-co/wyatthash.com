require('dotenv').config()

import log from './log'

const http = require("superagent");

export function notifyRocketChat(message: string) {

  http
    .post(process.env.rocketchat_webhook_url)
    .send({
      text: message
    })
    .end((error, response) => {
      console.error(error)
      if (error) {
        log.error("rocketchat.error", error.message);
      } else {
        log.info("rocketchat.notified", response.body);
      }
    });
}

