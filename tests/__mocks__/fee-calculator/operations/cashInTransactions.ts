import { Transaction } from '../../../../src/fee-calculator/types';

export const mockCashInTransactions = [
  {
    transaction: {
      operation: {
        amount: 1000000.00,
        currency: 'EUR',
      },
    } as Transaction,
    expected: 5.00,
  },
  {
    transaction: {
      operation: {
        amount: 100.00,
        currency: 'EUR',
      },
    } as Transaction,
    expected: 0.03,
  },
  {
    transaction: {
      operation: {
        amount: 678.34,
        currency: 'EUR',
      },
    } as Transaction,
    expected: 0.20,
  },
];
