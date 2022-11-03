
import { log } from './log'

const axios = require('axios')

const token = process.env.slushpool_auth_token

/*
 * poolStats API
 *
 * {
    btc: {
        luck_b10: "0.77",
        luck_b50: "0.85",
        luck_b250: "0.93",
        hash_rate_unit: "Gh/s",
        pool_scoring_hash_rate: 5820970883.3011,
        pool_active_workers: 219210,
        round_probability: "0.67",
        round_started: 1542096907,
        round_duration: 5913,
        blocks: {
            549753: {
                date_found: 1542002919,
                mining_duration: 3423,
                total_shares: 4640771710739,
                state: "confirmed",
                confirmations_left: 0,
                value: "12.92594863",
                user_reward: "0.00006194",
                pool_scoring_hash_rate: 5878745444.967269,
            },
        }
    }
}
*/
export async function poolStats(coin: string = 'btc'): Promise<any> {

  log.info('braiins.api.poolStats.get', { coin })

  const { data } = await axios.get(`https://pool.braiins.com/stats/json/${coin}/`, {
    headers: {
      'SlushPool-Auth-Token': token
    }
  })

  log.info('braiins.api.poolStats.get.result', { coin, data })

  return data

}



/*
 *
 * userProfile API
 *
 * {
    username: "username",
    btc: {
        confirmed_reward: "0.00765122",
        unconfirmed_reward: "0.00062272",
        estimated_reward: "0.00006014",
        send_threshold: "0.01000000",
        hash_rate_unit: "Gh/s",
        hash_rate_5m: 27978,
        hash_rate_60m: 28191,
        hash_rate_24h: 28357,
        hash_rate_scoring: 28294,
        hash_rate_yesterday: 28197,
        low_workers: 0,
        off_workers: 0,
        ok_workers: 2,
        dis_workers: 2,
    }
}
*/
export async function userProfile(coin: string = 'btc'): Promise<any> {

  log.info('braiins.api.userProfile.get', { coin })

  const { data } = await axios.get(`https://pool.braiins.com/accounts/profile/json/${coin}`, {
    headers: {
      'SlushPool-Auth-Token': token
    }
  })

  log.info('braiins.api.userProfile.get.result', { coin, data })

  return data

}

/*
 *
 * dailyReward API
 *
 * {
   "btc":{
      "daily_rewards":[
         {
            "date":1627862400,
            "total_reward":"0.36361081",
            "mining_reward":"0.35648119",
            "bos_plus_reward":"0.00712962",
            "referral_bonus":"0.00000000",
            "referral_reward":"0.00000000"
         },
      ]
   }
}
*/
export async function dailyReward(coin: string = 'btc'): Promise<any> {

  log.info('braiins.api.dailyReward.get', { coin })

  const { data } = await axios.get(`https://pool.braiins.com/accounts/rewards/json/${coin}`, {
    headers: {
      'SlushPool-Auth-Token': token
    }
  })

  log.info('braiins.api.dailyReward.get.result', { coin, data })

  return data

}

/*
 *
 * dailyHashrate API
 *
 * {
    	btc: [
        	{
            	date: 1662674400,
            	hash_rate_unit: "Gh/s",
            	hash_rate_24h: 1073.7,
            	scoring_hash_rate_24h: 322122.5,
            	total_shares: 21600000,
        	},
        	{
            	date: 1662588000,
            	hash_rate_unit: "Gh/s",
            	hash_rate_24h: 1000.7,
            	scoring_hash_rate_24h: 322100.5,
            	total_shares: 21200000,
        	},
    	]
}
*/
export async function dailyHashrate(coin: string = 'btc'): Promise<any> {

  log.info('braiins.api.dailyHashrate.get', { coin })

  const { data } = await axios.get(`https://pool.braiins.com/accounts/hash_rate_daily/json/group/${coin}`, {
    headers: {
      'SlushPool-Auth-Token': token
    }
  })

  log.info('braiins.api.dailyHashrate.get.result', { coin, data })

  return data

}


/*
 *
 * blockRewards API
 *
 * {
    "btc": {
        "block_rewards": [
            {
                "block_found_at": 1651804117,
                "pool_scoring_hash_rate": 4441768989.204721,
                "user_scoring_hash_rate": 12981.581642348925,
                "block_value": "12.59169582",
                "user_reward": "0.06366676",
                "block_height": 567815,
                "mining_reward": "0.06366676",
                "braiinsos_plus_mining_bonus": "0.00000000",
                "referral_reward": "0.00000000",
                "referral_bonus": "0.00000000",
                "confirmations_left": 0
            },
            {
                "block_found_at": 1651811734,
                "pool_scoring_hash_rate": 4441768989.387698,
                "user_scoring_hash_rate": 13041.508413918604,
                "block_value": "12.66780812",
                "user_reward": "0.07129083",
                "block_height": 567816,
                "mining_reward": "0.07129083",
                "braiinsos_plus_mining_bonus": "0.00000000",
                "referral_reward": "0.00000000",
                "referral_bonus": "0.00000000",
                "confirmations_left": 0
            }
        ],
        "hash_rate_unit": "Gh/s"
    }
}
*/
export async function blockRewards(coin: string = 'btc'): Promise<any> {

  log.info('braiins.api.dailyHashrate.get', { coin })

  const from_date = new Date()

  const to_date = new Date()

  const { data } = await axios.get(`https://pool.braiins.com/accounts/block_rewards/json/${coin}?from=${from_date}&to=${to_date}`, {
    headers: {
      'SlushPool-Auth-Token': token
    }
  })

  log.info('braiins.api.dailyHashrate.get.result', { coin, data })

  return data

}


/*
 *
 * workers API
 *
 * {
    btc: {
        workers: {
            username.worker1: {
                state: "ok",
                last_share: 1542103204,
                hash_rate_unit: "Gh/s",
                hash_rate_scoring: 15342,
                hash_rate_5m: 14977,
                hash_rate_60m: 15302,
                hash_rate_24h: 15351,
            },
            username.worker2: {
                state: "ok",
                last_share: 1542103200,
                hash_rate_unit: "Gh/s",
                hash_rate_scoring: 12952,
                hash_rate_5m: 13001,
                hash_rate_60m: 12889,
                hash_rate_24h: 13006,
            },
        }
    }
}
*/
export async function workers(coin: string = 'btc'): Promise<any> {

  log.info('braiins.api.workers.get', { coin })

  const { data } = await axios.get(`https://pool.braiins.com/accounts/workers/json/${coin}`, {
    headers: {
      'SlushPool-Auth-Token': token
    }
  })

  log.info('braiins.api.workers.get.result', { coin, data })

  return data

}

