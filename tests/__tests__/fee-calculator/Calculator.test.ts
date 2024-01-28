import { mockTransactions } from '../../__mocks__/fee-calculator/transactions'
import OperationMock from '../../__mocks__/fee-calculator/contracts/Operation'
import { Calculator } from '../../../src/fee-calculator/Calculator'
import { Operation } from '../../../src/fee-calculator/contracts'

jest.mock('../../__mocks__/contracts/Operation')
describe('calculator for all transactions', () => {
  let calculatorInstance: Calculator
  let mockOperation: jest.Mocked<Operation>

  beforeEach(() => {
    mockOperation = OperationMock()
    calculatorInstance = new Calculator()
  })

  it.each(mockTransactions)('should return rounded fee amount correctly that comes from operations', ({ transaction, expected, shouldReturn}) => {
    mockOperation.getCommissionFee.mockReturnValue(shouldReturn)
    const received = calculatorInstance.calculateFee(transaction, mockOperation)

    expect(mockOperation.getCommissionFee).toHaveBeenCalledTimes(1)
    expect(received).toBe(expected)
  })
})
