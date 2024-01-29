import { TransactionStore } from '../../../src/fee-calculator/TransactionStore';
import { mockGetMapTransactions } from '../../__mocks__/fee-calculator/getMapTransactions';
import { mockSetMapTransactions } from '../../__mocks__/fee-calculator/setMapTransactions';
import { transactionMap } from '../../__mocks__/fee-calculator/transactionMap';

describe('transaction store', () => {
  let StoreInstance: TransactionStore;

  beforeEach(() => {
    StoreInstance = new TransactionStore(transactionMap);
  });

  it.each(mockGetMapTransactions)('should return users transactions correctly', ({ userId, expected }) => {
    const received = StoreInstance.get(userId);
    expect(received).toEqual(expected);
  });

  it.each(mockSetMapTransactions)('should add transaction to users history correctly', ({ transaction, expected }) => {
    StoreInstance.set(transaction);
    expect(transactionMap).toContainEqual(expected);
  });
});
