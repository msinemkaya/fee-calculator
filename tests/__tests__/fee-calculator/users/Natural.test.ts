import Natural from '../../../../src/fee-calculator/users/Natural'
import MockWeeklyTransactionChecker from '../../../__mocks__/fee-calculator/utils/WeeklyTransactionChecker'
import { mockNaturalTransactions } from '../../../__mocks__/fee-calculator/users/naturalTransactions'

jest.mock('../../../__mocks__/fee-calculator/utils/WeeklyTransactionChecker')
describe('cash out transactions for natural type users', () => {
  let naturalInstance : Natural;
  const mockChecker = MockWeeklyTransactionChecker();

  const dataToProcess = [
    { amount: 1000, percentage: 0.3, expected: 3},
    { amount: 100, percentage: 0.3, expected: 0.30},
    { amount: 20000.68, percentage: 0.3, expected: 60.00},
  ]

  beforeEach(() => {
    naturalInstance = new Natural(mockChecker)
  })

  it.each(dataToProcess)('should return calculated fee with given amount and percentage ', ({amount, percentage, expected}) => {
    const received = naturalInstance.getProcessedFee(amount, percentage)
    expect(received).toBeCloseTo(expected)
  })

  it.each(mockNaturalTransactions)('should return amount to be processed', ({ transaction, shouldReturn, expected }) => {
    mockChecker.getWeeklyHistory.mockReturnValue(shouldReturn)
    const received = naturalInstance.getAmountToBeProcessed(transaction)
    expect(received).toBe(expected)
  })
})
