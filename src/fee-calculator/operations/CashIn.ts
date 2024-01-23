import { Operation } from '../contracts'
import { Transaction } from '../types'

export class CashIn implements Operation {
  getCommissionFee(transaction : Transaction) : number {
    return 0
  }

}
