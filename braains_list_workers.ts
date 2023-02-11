require("dotenv").config()

const axios = require('axios')

class BraiinsAPI {

  access_token: string

  constructor(access_token: string) {

    this.access_token = access_token

  }

  async accounts_hash_rate_daily() {

    const url = 'https://pool.braiins.com/accounts/hash_rate_daily/json/group/btc'

    const { data } = await axios.get(url, {
      headers: {
        'SlushPool-Auth-Token': this.access_token
      }
    })

    return data

  }
}

async function main() {

  const api = new BraiinsAPI(process.env.braiins_access_token)

  const result = await api.accounts_hash_rate_daily()

  console.log(result)

}

main()
