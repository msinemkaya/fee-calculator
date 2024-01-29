import { mockCalculatedTransactions } from '../../__mocks__/fee-calculator/calculatedTransactions';
import OperationMock from '../../__mocks__/fee-calculator/contracts/Operation';
import { Calculator } from '../../../src/fee-calculator/Calculator';
import { Operation } from '../../../src/fee-calculator/contracts';

jest.mock('../../__mocks__/fee-calculator/contracts/Operation');
describe('calculator for all transactions', () => {
  let CalculatorInstance: Calculator;
  let mockOperation: jest.Mocked<Operation>;

  beforeEach(() => {
    mockOperation = OperationMock();
    CalculatorInstance = new Calculator();
  });

  it.each(mockCalculatedTransactions)('should return rounded fee amount correctly that comes from operations', ({ transaction, expected, shouldReturn }) => {
    mockOperation.getCommissionFee.mockReturnValue(shouldReturn);
    const received = CalculatorInstance.calculateFee(transaction, mockOperation);

    expect(mockOperation.getCommissionFee).toHaveBeenCalledTimes(1);
    expect(received).toBe(expected);
  });
});
