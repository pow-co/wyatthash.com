
require('dotenv').config()

import { log } from 'rabbi'

import { EventEmitter } from 'events'

const events = new EventEmitter()

import { Job, BoostPowJobProof as Proof } from 'boostpow'

import { Miner } from 'boostminer'

import { stream, broadcast } from 'powco'

import { Transaction } from 'bsv'

import { cpus } from 'os'

const queue = require('fastq').promise(worker, process.env.CPUS || 4)

const axios = require('axios')

const miner = new Miner({

  privatekey: process.env.boostminer_private_key

})

async function worker(job: Job, done) {

  console.log('done', done)

  function handleJobRedeemed() {

    if (typeof done === 'function') {

      done()

    }

    miner.stop()

  }

  if (job.difficulty <= 0.025) {

    log.info('job.mining', job)

    events.on(`boostpow.job.${job.txid}.redeemed`, handleJobRedeemed)

    const {txhex} = await miner.workJob(job.txid)

    const tx = new Transaction(txhex)

    log.info('job.mining.result', { txhex, txid: tx.hash })

    await broadcast(txhex)

    const { data } = await axios.post(`https://pow.co/api/v1/boost/proofs/${tx.hash}`)

    events.on(`boostpow.job.${job.txid}.redeemed`, handleJobRedeemed)

    done(data)

  } else {

    console.log('job.notmining', job)

  }

}

export default async function main() {

  try {

    log.info('mine.small')

    stream.on('boostpow.job', async (job: Job) => {

      console.log('job.found', job)

      if (job.difficulty <= 0.025) {

        queue.push(job)

      } else {

        console.log('job.notmining', job)

      }

    })

    stream.on('boostpow.proof', async (proof: Proof) => {
    
      events.emit(`boostpow.job.${proof.spentTxid}.redeemed`, proof)
    })

  } catch(error) {

    log.error('mine.small.error', error)

  }

}

if (require.main === module) {

  main()

}

