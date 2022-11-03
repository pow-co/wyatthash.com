
import * as Boom from 'boom'

import * as braiins from '../../braiins_pool'

import { log } from '../../log'

export async function poolStats(req, h) {

  try {

    log.info('braiins.api.handler', { params: req.params, query: req.query })

    const result = await braiins.poolStats()

    return result

  } catch(error) {

    log.error('braiins.api.error', error)

    return Boom.badRequest(error)

  }

}

export async function userProfile(req, h) {

  try {

    log.info('braiins.api.handler.userProfile', { params: req.params, query: req.query })

    const result = await braiins.userProfile()

    return result

  } catch(error) {

    log.error('braiins.api.userProfile.error', error)

    return Boom.badRequest(error)

  }

}

export async function dailyReward(req, h) {

  try {

    log.info('braiins.api.dailyReward.handler', { params: req.params, query: req.query })

    const result = await braiins.dailyReward()

    return result

  } catch(error) {

    log.error('braiins.api.dailyReward.error', error)

    return Boom.badRequest(error)

  }

}

export async function dailyHashrate(req, h) {

  try {

    log.info('braiins.api.dailyHashrate.handler', { params: req.params, query: req.query })

    const result = await braiins.dailyHashrate()

    return result

  } catch(error) {

    log.error('braiins.api.dailyHashrate.error', error)

    return Boom.badRequest(error)

  }

}

export async function blockRewards(req, h) {

  try {

    log.info('braiins.api.blockRewards.handler', { params: req.params, query: req.query })

    const result = await braiins.blockRewards()

    return result

  } catch(error) {

    log.error('braiins.api.blockRewards.error', error)

    return Boom.badRequest(error)

  }

}

export async function workers(req, h) {

  try {

    log.info('braiins.api.workers.handler', { params: req.params, query: req.query })

    const result = await braiins.workers()

    return result

  } catch(error) {

    log.error('braiins.api.workers.error', error)

    return Boom.badRequest(error)

  }

}

