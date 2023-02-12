
require('dotenv').config()

import { log } from 'rabbi'

import { boostpow } from 'stag-wallet'

const axios = require('axios')

async function run() {

  try {

    log.info('boost.small')

    const job = await boostpow({

      difficulty: 0.0001,

      content: '598cda9fbe6ef960c514acff63c88719feafede4a5aa65b2d2fbe90a47734972',
      
      satoshis: 1000

    })

    console.log(job)

    //const result = await axios.get(`https://pow.co/api/v1/boost/jobs/${job.txid}`)
    const result = await axios.get(`http://localhost:8000/api/v1/boost/jobs/${job.txid}`)

    console.log('result.data', result.data)

  } catch(error) {

    log.error('mine.small.error', error.message)

  }

  process.exit(0)

}

run()

