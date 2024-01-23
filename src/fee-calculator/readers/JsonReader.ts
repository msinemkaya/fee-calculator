import { TransactionReader } from '../contracts'
import { Transaction } from '../types'

export class JsonReader implements TransactionReader{
  getTransactions() : Transaction[] {
    return []
  }

}
