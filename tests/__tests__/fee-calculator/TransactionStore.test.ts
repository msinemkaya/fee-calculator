import { TransactionStore } from '../../../src/fee-calculator/TransactionStore'
import { mockGetMapTransactions } from '../../__mocks__/fee-calculator/getMapTransactions'
import { Transaction } from '../../../src/fee-calculator/types'
import { mockSetMapTransactions } from '../../__mocks__/fee-calculator/setMapTransactions'

describe('transaction store', () => {
  let StoreInstance: TransactionStore

  const transactionMap = new Map([
    [
      1,
      [
        {"user_id": 1} as Transaction,
        {"user_id": 1} as Transaction,
      ]
    ],
    [
      2,
      [
        {"user_id": 2} as Transaction,
      ]
    ]
  ])

  beforeEach(() => {
    StoreInstance = new TransactionStore(transactionMap)
  })

  it.each(mockGetMapTransactions)('should return users transactions correctly', ({ userId, expected }) => {
    const received = StoreInstance.get(userId)
    expect(received).toEqual(expected)
  })

  it.each(mockSetMapTransactions)('should add transaction to users history correctly', ({ transaction, expected }) => {
    StoreInstance.set(transaction)
    expect(transactionMap).toContainEqual(expected)
  })
})
