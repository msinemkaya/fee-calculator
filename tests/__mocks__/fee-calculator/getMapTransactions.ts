import { Transaction } from '../../../src/fee-calculator/types'

export const mockGetMapTransactions = [
  {
    userId: 1,
    expected: [
        {"user_id": 1} as Transaction,
        {"user_id": 1} as Transaction,
    ]
  },
  {
    userId: 3,
    expected: []
  }
]
