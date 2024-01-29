import FactoryMock from '../../../__mocks__/fee-calculator/operations/OperationFactory';
import OperationManager from '../../../../src/fee-calculator/operations/OperationManager';
import OperationFactory from '../../../../src/fee-calculator/operations/OperationFactory';
import { cashInTransaction, cashOutTransaction, unknownTransaction } from '../../../__mocks__/fee-calculator/operations/managerTransactions';

jest.mock('../../../__mocks__/fee-calculator/operations/OperationFactory');
jest.mock('../../../../src/fee-calculator/operations/CashIn');

describe('operation manager', () => {
  let ManagerInstance: OperationManager;
  let mockFactory: jest.Mocked<OperationFactory>;

  beforeEach(() => {
    mockFactory = FactoryMock();
    ManagerInstance = new OperationManager(mockFactory);
  });

  it('should return CashIn instance since transaction type is cash_in', () => {
    const expected = mockFactory.getCashIn.mock.instances[0];
    const received = ManagerInstance.getOperation(cashInTransaction);
    expect(received).toEqual(expected);
  });

  it('should return CashOut instance since transaction type is cash_out', () => {
    const expected = mockFactory.getCashOut.mock.instances[0];
    const received = ManagerInstance.getOperation(cashOutTransaction);
    expect(received).toEqual(expected);
  });

  it('should throw error since transaction type does not exist', () => {
    expect(() => {
      ManagerInstance.getOperation(unknownTransaction);
    }).toThrowError('this transaction type does not exist');
  });
});
