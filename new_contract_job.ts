
require('dotenv').config()

import { BoostPowJob } from 'boostpow'

import { PrivateKey, Address} from 'bsv'

//import { boostpow } from 'stag-wallet'
import { boostpow, loadWallet } from '/Users/zyler/github/pow-co/stag-wallet'

export default async function main() {

  const cards = (await loadWallet()).cards

  const [wallet] = cards

  console.log('wallet.address', wallet.address)

  let privateKey = new PrivateKey(process.env.boostminer_private_key)

  let pubkey = privateKey.toPublicKey()

  let minerPubKeyHex = pubkey.toHex()

  let minerPubKeyHashHex = Address.fromPublicKey(pubkey, privateKey.network).toObject().hash

  const job = BoostPowJob.fromObject({
    minerPubKeyHash: minerPubKeyHashHex,
    diff: 0.0001,
    content: '238e378a17ae1ec72a8a2fb3c6686b07729c60bf7c4be4070284edc63f306e8f',
    tag: Buffer.from('yoga', 'utf8').toString('hex')
  })

  console.log(job)
  console.log(job.toObject())

  const result = await boostpow({
    minerPubKeyHash: minerPubKeyHashHex,
    difficulty: 0.00001,
    satoshis: 1000,
    content: '238e378a17ae1ec72a8a2fb3c6686b07729c60bf7c4be4070284edc63f306e8f',
    tag: 'yoga'
  })

  console.log(result)

}

if (require.main === module) {

  main()

}
