

import * as models from '../../models'

import { badRequest } from 'boom'

export async function index() {

  try {

    const events = await models.Event.findAll({
      where: {
        namespace: 'wyatthash.com',
        type: 'mining.bitcoin.reward.token.payout.sent'
      },
      order: [['createdAt', 'desc']]
    })

    return { events }

  } catch(error) {

    console.log('server.handlers.hash_token_rewards.index.error', error)

    return badRequest(error)
  }

}
