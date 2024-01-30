import Natural from '../../../../src/fee-calculator/users/Natural';
import config from '../../../../src/fee-calculator/config';
import MockWeeklyTransactionChecker from '../../../__mocks__/fee-calculator/utils/WeeklyTransactionChecker';
import naturalAmountCalculations from '../../../__mocks__/fee-calculator/users/naturalAmountCalculations';
import naturalFeeCalculations from '../../../__mocks__/fee-calculator/users/naturalFeeCalculations';

jest.mock('../../../__mocks__/fee-calculator/utils/WeeklyTransactionChecker');
describe('cash out transactions for natural type users', () => {
  let naturalInstance : Natural;
  const mockChecker = MockWeeklyTransactionChecker();

  beforeEach(() => {
    naturalInstance = new Natural(mockChecker, config.NATURAL_WEEK_LIMIT);
  });

  it.each(naturalFeeCalculations)('should return calculated fee with given amount and percentage ', ({ amount, percentage, expected }) => {
    const received = naturalInstance.getProcessedFee(amount, percentage);
    expect(received).toBeCloseTo(expected);
  });

  it.each(naturalAmountCalculations)('should return amount to be processed', ({ transaction, shouldReturn, expected }) => {
    mockChecker.getWeeklyHistory.mockReturnValue(shouldReturn);
    const received = naturalInstance.getAmountToBeProcessed(transaction);
    expect(received).toBe(expected);
  });
});
