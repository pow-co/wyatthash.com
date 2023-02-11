
import { notifyRocketChat } from './src/rocketchat'

async function main() {


  const message = process.argv[2] || "A payment of $1.00153 was paid to HASH token holders: https://whatsonchain.com/tx/95826b0802748b99a6a83afc71fb57328a938fa4b95f4a215b6c4e6fa17d02ce"

  try {

    const result = await notifyRocketChat(message)

    console.log(result)

  } catch(error) {

    console.error(error)

  }

  

}

main()
