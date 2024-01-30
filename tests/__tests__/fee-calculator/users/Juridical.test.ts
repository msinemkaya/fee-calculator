import Juridical from '../../../../src/fee-calculator/users/Juridical';
import config from '../../../../src/fee-calculator/config';
import juridicalAmountCalculations from '../../../__mocks__/fee-calculator/users/juridicalAmountCalculations';
import juridicalFeeCalculations from '../../../__mocks__/fee-calculator/users/juridicalFeeCalculations';

describe('cash out transactions for juridical type users', () => {
  let juridicalInstance : Juridical;

  beforeEach(() => {
    juridicalInstance = new Juridical(config.JURIDICAL_MIN_FEE);
  });

  it.each(juridicalFeeCalculations)('should return calculated fee correctly with given amount and percentage ', ({ amount, percentage, expected }) => {
    const received = juridicalInstance.getProcessedFee(amount, percentage);
    expect(received).toBeCloseTo(expected);
  });

  it.each(juridicalAmountCalculations)('should return operation amount', (mockJuridicalTransaction) => {
    const amount = juridicalInstance.getAmountToBeProcessed(mockJuridicalTransaction);
    expect(amount).toBe(mockJuridicalTransaction.operation.amount);
  });
});
