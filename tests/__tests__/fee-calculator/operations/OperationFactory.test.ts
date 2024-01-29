import OperationFactory from '../../../../src/fee-calculator/operations/OperationFactory';
import { CashIn, CashOut } from '../../../../src/fee-calculator/operations';
import Juridical from '../../../../src/fee-calculator/users/Juridical';
import Natural from '../../../../src/fee-calculator/users/Natural';
import WeeklyTransactionChecker from '../../../../src/fee-calculator/utils/WeeklyTransactionChecker';
import { juridicalTransaction, naturalTransaction, unknownTransaction } from '../../../__mocks__/fee-calculator/operations/factoryTransactions';

jest.mock('../../../../src/fee-calculator/operations/CashOut');
jest.mock('../../../../src/fee-calculator/users/Natural');

describe('operation factory', () => {
  let FactoryInstance: OperationFactory;
  const MockedCashOut = CashOut;
  const MockedNatural = Natural;

  beforeEach(() => {
    FactoryInstance = new OperationFactory();
  });

  it('should return new instance of CashIn', () => {
    const received = FactoryInstance.getCashIn();

    expect(received).toBeInstanceOf(CashIn);
  });

  describe('CashOut instance with given user type', () => {
    it('should return new instance of CashOut with Juridical instance', () => {
      const received = FactoryInstance.getCashOut(juridicalTransaction);

      expect(received).toBeInstanceOf(CashOut);
      expect(MockedCashOut).toHaveBeenCalledWith(expect.any(Juridical), 0.3);
    });

    it('should return new instance of CashOut with Natural instance', () => {
      const received = FactoryInstance.getCashOut(naturalTransaction);

      expect(received).toBeInstanceOf(CashOut);
      expect(MockedCashOut).toHaveBeenCalledWith(expect.any(Natural), 0.3);
      expect(MockedNatural).toHaveBeenCalledWith(expect.any(WeeklyTransactionChecker));
    });

    it('should throw error', () => {
      expect(() => {
        FactoryInstance.getCashOut(unknownTransaction);
      }).toThrowError('this user type does not exist');
    });
  });
});
