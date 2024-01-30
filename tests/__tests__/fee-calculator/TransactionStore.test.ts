import getMapTransactions from '../../__mocks__/fee-calculator/getMapTransactions';
import setMapTransactions from '../../__mocks__/fee-calculator/setMapTransactions';
import transactionMap from '../../__mocks__/fee-calculator/transactionMap';
import { TransactionStore } from '../../../src/fee-calculator/TransactionStore';

describe('transaction store', () => {
  let StoreInstance: TransactionStore;

  beforeEach(() => {
    StoreInstance = new TransactionStore(transactionMap);
  });

  it.each(getMapTransactions)('should return users transactions correctly', ({ userId, expected }) => {
    const received = StoreInstance.get(userId);
    expect(received).toEqual(expected);
  });

  it.each(setMapTransactions)('should add transaction to users history correctly', ({ transaction, expected }) => {
    StoreInstance.set(transaction);
    expect(transactionMap).toContainEqual(expected);
  });
});
