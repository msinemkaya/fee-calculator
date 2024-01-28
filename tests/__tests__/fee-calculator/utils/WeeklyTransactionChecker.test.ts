import TransactionStoreMock from '../../../__mocks__/fee-calculator/TransactionStore'
import WeeklyTransactionChecker from '../../../../src/fee-calculator/utils/WeeklyTransactionChecker'
import { TransactionStore } from '../../../../src/fee-calculator/TransactionStore'
import { mockWeeklyTransactions } from '../../../__mocks__/fee-calculator/utils/WeeklyTransactions'

jest.mock('../../../__mocks__/fee-calculator/TransactionStore')
describe('weekly transactions', () => {
  let checkerInstance: WeeklyTransactionChecker
  let mockStore: jest.Mocked<TransactionStore>

  beforeEach(() => {
    mockStore = TransactionStoreMock()
    checkerInstance = new WeeklyTransactionChecker(mockStore)
  })

  it.each(mockWeeklyTransactions)('should return users weekly transaction history correctly', ({ transaction, shouldReturn, expected}) => {
    mockStore.get.mockReturnValue(shouldReturn)
    const received = checkerInstance.getWeeklyHistory(transaction)

    expect(mockStore.get).toHaveBeenCalledTimes(1)
    expect(received).toEqual(expected)
  })
})
