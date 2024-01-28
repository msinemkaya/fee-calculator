import { CashOut } from '../../../../src/fee-calculator/operations'
import PersonMock from '../../../__mocks__/contracts/Person'
import { mockCashOutTransactions } from '../../../__mocks__/cashOutTransactions'
import { Person } from '../../../../src/fee-calculator/contracts'

jest.mock('../../../__mocks__/contracts/Person')
describe('cash out transactions', () => {

  let CashOutInstance: CashOut;
  let mockPerson: jest.Mocked<Person>

  beforeEach(() => {
    mockPerson = PersonMock();
    CashOutInstance = new CashOut(mockPerson, 0.3)
  })

  it.each(mockCashOutTransactions)('should return calculated commission fee correctly', ({ transaction, shouldReturn, expected }) => {
    mockPerson.getAmountToBeProcessed.mockReturnValue(shouldReturn)
    mockPerson.getProcessedFee.mockReturnValue(expected)
    const received = CashOutInstance.getCommissionFee(transaction)

    expect(mockPerson.getProcessedFee).toHaveBeenCalledTimes(1)
    expect(received).toBeCloseTo(expected)
  })
})