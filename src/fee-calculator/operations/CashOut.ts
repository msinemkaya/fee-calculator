import { Operation } from '../contracts'
import { Transaction } from '../types'

export class CashOut implements Operation {
  getCommissionFee(transaction : Transaction) : number {
    return 0
  }

}
