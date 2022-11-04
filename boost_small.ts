
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

      content: 'f9e6c4f0ac7219257e1276cd23c1bff5e5088204ff4e3471786c6252fb00f01e',
      
      satoshis: 1000

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

