
require('dotenv').config()

import { log } from 'rabbi'

import { Job } from 'boostpow'

import { Miner } from 'boostminer'

import { stream, broadcast } from 'powco'

import { Transaction } from 'bsv'

import { cpus } from 'os'

const queue = require('fastq').promise(worker, cpus())

const axios = require('axios')

const miner = new Miner({
  privatekey: process.env.stag_private_key
})

async function worker(job: Job, done) {


  if (job.difficulty <= 0.025) {

    console.log('job.mining', job)

    const {txhex} = await miner.workJob(job.txid)

    const tx = new Transaction(txhex)

    console.log('job.mining.result', { txhex, txid: tx.hash })

    await broadcast(txhex)

    const { data } = await axios.post(`https://pow.co/api/v1/boost/proofs/${tx.hash}`)

    done(data)

  } else {

    console.log('job.notmining', job)

  }

}

async function run() {

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

  } catch(error) {

    log.error('mine.small.error', error)

  }

}

run()

