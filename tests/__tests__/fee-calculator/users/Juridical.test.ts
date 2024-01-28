import Juridical from '../../../../src/fee-calculator/users/Juridical'
import { mockJuridicalTransactions } from '../../../__mocks__/fee-calculator/users/juridicalTransactions'
describe('cash out transactions for juridical type users', () => {
  let juridicalInstance : Juridical;

  const dataToProcess = [
    { amount: 1000, percentage: 0.3, expected: 3},
    { amount: 100, percentage: 0.3, expected: 0.50},
  ]

  beforeEach(() => {
    juridicalInstance = new Juridical()
  })

  it.each(dataToProcess)('should return calculated fee -minimum of 0.50- with given amount and percentage ', ({amount, percentage, expected}) => {
    const received = juridicalInstance.getProcessedFee(amount, percentage)
    expect(received).toBeCloseTo(expected)
  })

  it.each(mockJuridicalTransactions)('should return operation amount', (mockJuridicalTransaction) => {
    const amount = juridicalInstance.getAmountToBeProcessed(mockJuridicalTransaction)
    expect(amount).toBe(mockJuridicalTransaction.operation.amount)
  })
})
