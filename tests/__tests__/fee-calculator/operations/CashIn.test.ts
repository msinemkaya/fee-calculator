import CashIn from '../../../../src/fee-calculator/operations/CashIn';
import cashInTransactions from '../../../__mocks__/fee-calculator/operations/cashInTransactions';

describe('cash in transactions', () => {
  let CashInInstance : CashIn;

  beforeEach(() => {
    CashInInstance = new CashIn(0.03, 5);
  });

  it.each(cashInTransactions)('should return calculated commission fee correctly', ({ transaction, expected }) => {
    const result = CashInInstance.getCommissionFee(transaction);
    expect(result).toBeCloseTo(expected);
  });
});
