
import { TokenRewardPayee } from './token_reward_payee'

export interface TokenRewardPayment {

  txid: string;

  token_origin: string;

  total_tokens: number;

  total_satoshis: number;

  payees: TokenRewardPayee[];

}

