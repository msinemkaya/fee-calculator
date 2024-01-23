import { Transaction } from '../types'

export interface TransactionReader {
  getTransactions(): Transaction[]
}
