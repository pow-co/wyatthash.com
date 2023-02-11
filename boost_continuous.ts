
require('dotenv').config()

console.log(process.env.BSV_PRIVATE_KEY)
console.log(process.env.stag_private_key)

import { log } from 'rabbi'

import { boostpow } from 'stag-wallet'

const axios = require('axios')

async function run() {

  try {

    log.info('boost.small')

    const job = await boostpow({

      difficulty: 0.0001,

      content: '62acd43fd07cc382f69c20e2de6485d5eca9759d916563e4518d29303337b8f8',
      
      satoshis: 10000

    })

    console.log(job)

    const result = await axios.get(`https://pow.co/api/v1/boost/jobs/${job.txid}`)

    console.log('result.data', result.data)

  } catch(error) {

    log.error('mine.small.error', error.message)

  }

  process.exit(0)

}

run()

